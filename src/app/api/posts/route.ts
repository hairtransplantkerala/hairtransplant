import { NextRequest, NextResponse } from 'next/server';
import { createPost, listPosts } from '@/lib/content/posts';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.title || !body.content || !body.slug) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: title, content, or slug' },
        { status: 400 }
      );
    }

    const post = await createPost(body);

    return NextResponse.json({
      success: true,
      post,
    }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: error.message?.includes('Slug already exists') ? 400 : 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const category = searchParams.get('category');
    const posts = await listPosts({ status, category });

    return NextResponse.json({
      success: true,
      posts,
      total: posts.length,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
