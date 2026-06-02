import { NextRequest, NextResponse } from 'next/server';
import { createGalleryItem, listGallery } from '@/lib/content/gallery';

export async function GET(request: NextRequest) {
  try {
    const category = request.nextUrl.searchParams.get('category');
    const items = await listGallery(category);

    return NextResponse.json({
      success: true,
      items,
      total: items.length,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.procedure || !body.before || !body.after) {
      return NextResponse.json(
        { success: false, error: 'Procedure, before image, and after image are required' },
        { status: 400 }
      );
    }

    const item = await createGalleryItem(body);

    return NextResponse.json({ success: true, item }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
