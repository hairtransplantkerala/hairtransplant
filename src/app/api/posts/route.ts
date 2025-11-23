import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Use service role for admin operations (bypasses RLS)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

// POST - Create new post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('Received post data:', {
      title: body.title,
      slug: body.slug,
      hasContent: !!body.content
    });
    
    // Validate required fields
    if (!body.title || !body.content || !body.slug) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: title, content, or slug' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const { data: existing, error: checkError } = await supabaseAdmin
      .from('posts')
      .select('id')
      .eq('slug', body.slug)
      .maybeSingle();

    if (checkError) {
      console.error('Error checking slug:', checkError);
    }

    if (existing) {
      return NextResponse.json(
        { success: false, error: 'Slug already exists. Please use a different slug.' },
        { status: 400 }
      );
    }

    const postData = {
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt || null,
      content: body.content,
      image: body.image || null,
      author: body.author || 'Admin',
      category: body.category || null,
      tags: body.tags || [],
      read_time: body.read_time || null,
      published: body.published || false,
      published_at: body.published_at || null,
      meta_title: body.meta_title || null,
      meta_description: body.meta_description || null,
      meta_keywords: body.meta_keywords || null,
      og_title: body.og_title || null,
      og_description: body.og_description || null,
      og_image: body.og_image || null,
      schema_markup: body.schema_markup || null,
      views: 0,
    };

    console.log('Inserting post with data keys:', Object.keys(postData));

    // Use supabaseAdmin to bypass RLS
    const { data: post, error } = await supabaseAdmin
      .from('posts')
      .insert([postData])
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { 
          success: false, 
          error: error.message,
          details: error.details,
          hint: error.hint 
        },
        { status: 500 }
      );
    }

    console.log('Post created successfully:', post.id);

    return NextResponse.json({
      success: true,
      post
    }, { status: 201 });
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET - Fetch all posts
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const category = searchParams.get('category');

    let query = supabaseAdmin
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (status === 'published') {
      query = query.eq('published', true);
    } else if (status === 'draft') {
      query = query.eq('published', false);
    }

    if (category) {
      query = query.eq('category', category);
    }

    const { data: posts, error } = await query;

    if (error) {
      console.error('Error fetching posts:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      posts: posts || [],
      total: posts?.length || 0
    });
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
