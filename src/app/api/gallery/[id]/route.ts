import { NextRequest, NextResponse } from 'next/server';
import { deleteGalleryItem, getGalleryItem, updateGalleryItem } from '@/lib/content/gallery';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const item = await getGalleryItem(id);

  if (!item) {
    return NextResponse.json(
      { success: false, error: 'Gallery item not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, item });
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const body = await request.json();
    const item = await updateGalleryItem(id, body);

    if (!item) {
      return NextResponse.json(
        { success: false, error: 'Gallery item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, item });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const deleted = await deleteGalleryItem(id);

  if (!deleted) {
    return NextResponse.json(
      { success: false, error: 'Gallery item not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true });
}
