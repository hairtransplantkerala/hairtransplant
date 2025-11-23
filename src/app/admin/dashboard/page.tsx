"use client";

import { useEffect, useState } from "react";
import { FileText, Eye, ThumbsUp, TrendingUp, Loader } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalViews: 0,
  });
  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch("/api/posts");
      const data = await response.json();

      if (data.success) {
        const posts = data.posts || [];
        const published = posts.filter((p: any) => p.published);
        const drafts = posts.filter((p: any) => !p.published);
        const totalViews = posts.reduce((sum: number, p: any) => sum + (p.views || 0), 0);

        setStats({
          totalPosts: posts.length,
          publishedPosts: published.length,
          draftPosts: drafts.length,
          totalViews,
        });

        // Get 5 most recent posts
        setRecentPosts(posts.slice(0, 5));
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const statsData = [
    {
      name: "Total Posts",
      value: stats.totalPosts.toString(),
      change: `${stats.draftPosts} drafts`,
      icon: FileText,
      color: "bg-blue-500"
    },
    {
      name: "Total Views",
      value: stats.totalViews.toLocaleString(),
      change: "All time",
      icon: Eye,
      color: "bg-green-500"
    },
    {
      name: "Published",
      value: stats.publishedPosts.toString(),
      change: `${stats.draftPosts} drafts`,
      icon: ThumbsUp,
      color: "bg-purple-500"
    },
    {
      name: "Engagement",
      value: stats.totalViews > 0 ? Math.round(stats.totalViews / stats.totalPosts || 0).toString() : "0",
      change: "Avg views per post",
      icon: TrendingUp,
      color: "bg-orange-500"
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="animate-spin text-primary-600" size={48} />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your blog.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-gray-600 text-sm font-medium mb-1">{stat.name}</p>
            <p className="text-gray-500 text-xs">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-xl shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">Recent Posts</h2>
        </div>
        {recentPosts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{post.title}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        post.published
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{post.views || 0}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(post.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center">
            <p className="text-gray-500">No posts yet. Create your first post!</p>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl shadow-md p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Create New Post</h3>
          <p className="text-primary-100 mb-4">Start writing a new blog post</p>
          <a href="/admin/posts/new" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-block">
            New Post
          </a>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-md p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Manage Posts</h3>
          <p className="text-purple-100 mb-4">View and edit all blog posts</p>
          <a href="/admin/posts" className="btn-primary bg-white text-purple-600 hover:bg-gray-100 inline-block">
            View Posts
          </a>
        </div>
      </div>
    </div>
  );
}
