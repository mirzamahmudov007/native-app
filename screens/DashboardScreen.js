import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DashboardScreen = () => {
  const stats = [
    { title: 'Total Customers', value: '1,234', icon: 'people', color: 'bg-blue-500' },
    { title: 'Active Projects', value: '56', icon: 'folder', color: 'bg-green-500' },
    { title: 'Revenue', value: '$45,678', icon: 'cash', color: 'bg-purple-500' },
    { title: 'Tasks', value: '89', icon: 'checkmark-circle', color: 'bg-orange-500' },
  ];

  const recentActivities = [
    { id: 1, title: 'New customer added', time: '2 hours ago', type: 'customer' },
    { id: 2, title: 'Project completed', time: '4 hours ago', type: 'project' },
    { id: 3, title: 'Payment received', time: '6 hours ago', type: 'payment' },
    { id: 4, title: 'Meeting scheduled', time: '1 day ago', type: 'meeting' },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        {/* Header */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-gray-800">Dashboard</Text>
          <Text className="text-gray-600 mt-1">Welcome back! Here's your overview</Text>
        </View>

        {/* Stats Cards */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">Statistics</Text>
          <View className="flex-row flex-wrap justify-between">
            {stats.map((stat, index) => (
              <View key={index} className="w-[48%] bg-white rounded-lg p-4 mb-3 shadow-sm">
                <View className={`w-12 h-12 ${stat.color} rounded-lg items-center justify-center mb-3`}>
                  <Ionicons name={stat.icon} size={24} color="white" />
                </View>
                <Text className="text-2xl font-bold text-gray-800">{stat.value}</Text>
                <Text className="text-gray-600 text-sm">{stat.title}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">Quick Actions</Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity className="w-[48%] bg-blue-500 rounded-lg p-4 mb-3 items-center">
              <Ionicons name="add-circle" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">Add Customer</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[48%] bg-green-500 rounded-lg p-4 mb-3 items-center">
              <Ionicons name="create" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">New Project</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[48%] bg-purple-500 rounded-lg p-4 mb-3 items-center">
              <Ionicons name="calendar" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[48%] bg-orange-500 rounded-lg p-4 mb-3 items-center">
              <Ionicons name="analytics" size={32} color="white" />
              <Text className="text-white font-semibold mt-2">Reports</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activities */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">Recent Activities</Text>
          <View className="bg-white rounded-lg p-4 shadow-sm">
            {recentActivities.map((activity) => (
              <View key={activity.id} className="flex-row items-center py-3 border-b border-gray-100 last:border-b-0">
                <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center mr-3">
                  <Ionicons 
                    name={activity.type === 'customer' ? 'person' : 
                          activity.type === 'project' ? 'folder' : 
                          activity.type === 'payment' ? 'cash' : 'calendar'} 
                    size={20} 
                    color="#3b82f6" 
                  />
                </View>
                <View className="flex-1">
                  <Text className="font-medium text-gray-800">{activity.title}</Text>
                  <Text className="text-gray-500 text-sm">{activity.time}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen; 