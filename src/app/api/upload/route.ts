import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

function signCloudinaryParams(params: Record<string, string | number>, apiSecret: string) {
  const payload = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join('&');

  return crypto.createHash('sha1').update(`${payload}${apiSecret}`).digest('hex');
}

export async function POST(request: NextRequest) {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      return NextResponse.json(
        { success: false, error: 'Cloudinary environment variables are not configured' },
        { status: 500 }
      );
    }

    const incoming = await request.formData();
    const file = incoming.get('file');
    const folder = String(incoming.get('folder') || 'kerala-hair-transplant');

    if (!file || typeof file === 'string') {
      return NextResponse.json(
        { success: false, error: 'Image file is required' },
        { status: 400 }
      );
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const uploadParams = {
      folder,
      timestamp,
    };
    const signature = signCloudinaryParams(uploadParams, apiSecret);
    const formData = new FormData();

    formData.append('file', file);
    formData.append('api_key', apiKey);
    formData.append('timestamp', String(timestamp));
    formData.append('folder', folder);
    formData.append('signature', signature);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: result.error?.message || 'Cloudinary upload failed' },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
      width: result.width,
      height: result.height,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
