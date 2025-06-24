import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AboutScreen = () => {
  const features = [
    {
      title: 'Customer Management',
      description: 'Comprehensive customer database with detailed profiles and interaction history',
      icon: 'people',
      color: 'bg-blue-500',
    },
    {
      title: 'Project Tracking',
      description: 'Monitor project progress, set milestones, and track deliverables',
      icon: 'folder',
      color: 'bg-green-500',
    },
    {
      title: 'Sales Analytics',
      description: 'Advanced analytics and reporting to optimize your sales performance',
      icon: 'trending-up',
      color: 'bg-purple-500',
    },
    {
      title: 'Task Management',
      description: 'Organize tasks, set priorities, and track completion status',
      icon: 'checkmark-circle',
      color: 'bg-orange-500',
    },
    {
      title: 'Communication Tools',
      description: 'Integrated messaging and communication features for team collaboration',
      icon: 'chatbubbles',
      color: 'bg-pink-500',
    },
    {
      title: 'Mobile Accessibility',
      description: 'Access your CRM data anywhere, anytime with our mobile app',
      icon: 'phone-portrait',
      color: 'bg-indigo-500',
    },
  ];

  const contactInfo = [
    { label: 'Email', value: 'support@iqcrm.com', icon: 'mail', action: 'mailto:support@iqcrm.com' },
    { label: 'Phone', value: '+1 (555) 123-4567', icon: 'call', action: 'tel:+15551234567' },
    { label: 'Website', value: 'www.iqcrm.com', icon: 'globe', action: 'https://www.iqcrm.com' },
    { label: 'Address', value: '123 Business St, Tech City, TC 12345', icon: 'location', action: null },
  ];

  const handleContact = (action) => {
    if (action) {
      Linking.openURL(action);
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        {/* App Header */}
        <View className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 mb-6 items-center">
          <View className="w-20 h-20 bg-white bg-opacity-20 rounded-full items-center justify-center mb-4">
            <Ionicons name="business" size={40} color="white" />
          </View>
          <Text className="text-white text-2xl font-bold mb-2">iQCRM Mobile</Text>
          <Text className="text-blue-100 text-center">
            Your complete customer relationship management solution
          </Text>
          <Text className="text-blue-100 text-sm mt-2">Version 1.0.0</Text>
        </View>

        {/* App Description */}
        <View className="bg-white rounded-lg p-4 mb-6 shadow-sm">
          <Text className="text-lg font-semibold text-gray-800 mb-3">About iQCRM</Text>
          <Text className="text-gray-600 leading-6">
            iQCRM is a powerful customer relationship management platform designed to help businesses 
            streamline their customer interactions, manage projects effectively, and boost sales performance. 
            Our mobile app provides you with all the tools you need to manage your business on the go.
          </Text>
        </View>

        {/* Features */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">Key Features</Text>
          {features.map((feature, index) => (
            <View key={index} className="bg-white rounded-lg p-4 mb-3 shadow-sm">
              <View className="flex-row items-start">
                <View className={`w-12 h-12 ${feature.color} rounded-lg items-center justify-center mr-4`}>
                  <Ionicons name={feature.icon} size={24} color="white" />
                </View>
                <View className="flex-1">
                  <Text className="font-semibold text-gray-800 text-base mb-1">{feature.title}</Text>
                  <Text className="text-gray-600 text-sm leading-5">{feature.description}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Contact Information */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-3">Contact Us</Text>
          <View className="bg-white rounded-lg p-4 shadow-sm">
            {contactInfo.map((contact, index) => (
              <TouchableOpacity
                key={index}
                className={`flex-row items-center py-3 ${index !== contactInfo.length - 1 ? 'border-b border-gray-100' : ''}`}
                onPress={() => handleContact(contact.action)}
                disabled={!contact.action}
              >
                <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center mr-3">
                  <Ionicons name={contact.icon} size={20} color="#3b82f6" />
                </View>
                <View className="flex-1">
                  <Text className="font-medium text-gray-800">{contact.label}</Text>
                  <Text className="text-gray-600 text-sm">{contact.value}</Text>
                </View>
                {contact.action && (
                  <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* App Info */}
        <View className="bg-white rounded-lg p-4 mb-6 shadow-sm">
          <Text className="text-lg font-semibold text-gray-800 mb-3">App Information</Text>
          <View className="space-y-3">
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Version</Text>
              <Text className="font-medium text-gray-800">1.0.0</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Build</Text>
              <Text className="font-medium text-gray-800">2024.1.0</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Platform</Text>
              <Text className="font-medium text-gray-800">React Native</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Framework</Text>
              <Text className="font-medium text-gray-800">Expo</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View className="bg-gray-100 rounded-lg p-4 mb-6">
          <Text className="text-center text-gray-600 text-sm">
            © 2024 iQCRM. All rights reserved.
          </Text>
          <Text className="text-center text-gray-500 text-xs mt-2">
            Built with React Native and Expo
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutScreen; 