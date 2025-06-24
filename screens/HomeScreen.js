import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const featuredItems = [
    {
      id: 1,
      title: 'Customer Management',
      description: 'Manage your customer relationships effectively',
      icon: 'people',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Project Tracking',
      description: 'Track project progress and milestones',
      icon: 'folder',
      color: 'bg-green-500',
    },
    {
      id: 3,
      title: 'Sales Analytics',
      description: 'Analyze sales performance and trends',
      icon: 'trending-up',
      color: 'bg-purple-500',
    },
    {
      id: 4,
      title: 'Task Management',
      description: 'Organize and prioritize your tasks',
      icon: 'checkmark-circle',
      color: 'bg-orange-500',
    },
  ];

  const quickLinks = [
    { title: 'Add New Customer', icon: 'person-add', color: 'bg-blue-500' },
    { title: 'Create Project', icon: 'add-circle', color: 'bg-green-500' },
    { title: 'View Reports', icon: 'analytics', color: 'bg-purple-500' },
    { title: 'Schedule Meeting', icon: 'calendar', color: 'bg-orange-500' },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        {/* Welcome Header */}
        <View className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 mb-6">
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-white text-2xl font-bold mb-2">Welcome to iQCRM</Text>
              <Text className="text-blue-100 text-base">
                Your complete customer relationship management solution
              </Text>
            </View>
            <View className="w-16 h-16 bg-white bg-opacity-20 rounded-full items-center justify-center">
              <Ionicons name="business" size={32} color="white" />
            </View>
          </View>
        </View>

        {/* Quick Links */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">Quick Actions</Text>
          <View className="flex-row flex-wrap justify-between">
            {quickLinks.map((link, index) => (
              <TouchableOpacity 
                key={index} 
                className={`w-[48%] ${link.color} rounded-lg p-4 mb-3 items-center`}
              >
                <Ionicons name={link.icon} size={28} color="white" />
                <Text className="text-white font-medium text-center mt-2 text-sm">
                  {link.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Featured Modules */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">Featured Modules</Text>
          {featuredItems.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              className="bg-white rounded-lg p-4 mb-3 shadow-sm flex-row items-center"
            >
              <View className={`w-12 h-12 ${item.color} rounded-lg items-center justify-center mr-4`}>
                <Ionicons name={item.icon} size={24} color="white" />
              </View>
              <View className="flex-1">
                <Text className="font-semibold text-gray-800 text-base">{item.title}</Text>
                <Text className="text-gray-600 text-sm">{item.description}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Stats Overview */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">Today's Overview</Text>
          <View className="bg-white rounded-lg p-4 shadow-sm">
            <View className="flex-row justify-between items-center mb-4">
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center mr-3">
                  <Ionicons name="trending-up" size={20} color="#10b981" />
                </View>
                <View>
                  <Text className="font-semibold text-gray-800">Sales Growth</Text>
                  <Text className="text-green-600 text-sm">+12.5% this month</Text>
                </View>
              </View>
              <Text className="text-2xl font-bold text-gray-800">$12,450</Text>
            </View>
            
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center mr-3">
                  <Ionicons name="people" size={20} color="#3b82f6" />
                </View>
                <View>
                  <Text className="font-semibold text-gray-800">New Customers</Text>
                  <Text className="text-blue-600 text-sm">+8 this week</Text>
                </View>
              </View>
              <Text className="text-2xl font-bold text-gray-800">24</Text>
            </View>
          </View>
        </View>

        {/* Tips Section */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">Pro Tips</Text>
          <View className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
            <View className="flex-row items-start">
              <Ionicons name="bulb" size={24} color="#3b82f6" className="mr-3 mt-1" />
              <View className="flex-1">
                <Text className="font-semibold text-blue-800 mb-1">Boost Your Productivity</Text>
                <Text className="text-blue-700 text-sm">
                  Use the dashboard to quickly access your most important metrics and take action on pending tasks.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen; 