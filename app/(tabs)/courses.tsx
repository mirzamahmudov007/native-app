import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  BookOpen, 
  Users, 
  Clock, 
  Star,
  Play,
  Plus,
  Filter,
  TrendingUp,
  Award,
  Calendar
} from 'lucide-react-native';

export default function CoursesScreen() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'React Native Development',
      instructor: 'John Smith',
      category: 'Programming',
      level: 'Intermediate',
      duration: '12 weeks',
      students: 234,
      rating: 4.8,
      price: '$299',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      progress: 75,
      status: 'active',
      lessons: 48,
      completionRate: 87
    },
    {
      id: 2,
      title: 'Advanced Python Programming',
      instructor: 'Maria Garcia',
      category: 'Programming',
      level: 'Advanced',
      duration: '16 weeks',
      students: 189,
      rating: 4.9,
      price: '$399',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      progress: 60,
      status: 'active',
      lessons: 64,
      completionRate: 92
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Alex Thompson',
      category: 'Design',
      level: 'Beginner',
      duration: '8 weeks',
      students: 456,
      rating: 4.7,
      price: '$199',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      progress: 90,
      status: 'active',
      lessons: 32,
      completionRate: 78
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      instructor: 'Sarah Wilson',
      category: 'Marketing',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 312,
      rating: 4.6,
      price: '$249',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      progress: 45,
      status: 'draft',
      lessons: 40,
      completionRate: 85
    },
  ];

  const categories = [
    { id: 'all', label: 'All Courses', count: 156 },
    { id: 'programming', label: 'Programming', count: 45 },
    { id: 'design', label: 'Design', count: 32 },
    { id: 'marketing', label: 'Marketing', count: 28 },
    { id: 'business', label: 'Business', count: 51 },
  ];

  const stats = [
    { title: 'Total Courses', value: '156', icon: BookOpen, color: '#3b82f6' },
    { title: 'Active Courses', value: '124', icon: Play, color: '#10b981' },
    { title: 'Total Students', value: '2,847', icon: Users, color: '#f59e0b' },
    { title: 'Avg. Rating', value: '4.8', icon: Star, color: '#8b5cf6' },
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner': return '#10b981';
      case 'intermediate': return '#f59e0b';
      case 'advanced': return '#ef4444';
      default: return '#64748b';
    }
  };

  const getLevelBgColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner': return '#ecfdf5';
      case 'intermediate': return '#fffbeb';
      case 'advanced': return '#fef2f2';
      default: return '#f8fafc';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? '#10b981' : '#f59e0b';
  };

  const getStatusBgColor = (status: string) => {
    return status === 'active' ? '#ecfdf5' : '#fffbeb';
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Courses</Text>
          <Text style={styles.headerSubtitle}>Manage your course catalog</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Plus size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Stats */}
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: `${stat.color}15` }]}>
                <stat.icon size={20} color={stat.color} />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statTitle}>{stat.title}</Text>
            </View>
          ))}
        </View>

        {/* Category Filters */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryTab,
                selectedCategory === category.id && styles.categoryTabActive
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Text style={[
                styles.categoryTabText,
                selectedCategory === category.id && styles.categoryTabTextActive
              ]}>
                {category.label}
              </Text>
              <View style={[
                styles.categoryTabBadge,
                selectedCategory === category.id && styles.categoryTabBadgeActive
              ]}>
                <Text style={[
                  styles.categoryTabBadgeText,
                  selectedCategory === category.id && styles.categoryTabBadgeTextActive
                ]}>
                  {category.count}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Courses List */}
        <View style={styles.coursesContainer}>
          {courses.map((course) => (
            <View key={course.id} style={styles.courseCard}>
              <View style={styles.courseImageContainer}>
                <Image source={{ uri: course.image }} style={styles.courseImage} />
                <View style={[
                  styles.statusBadge,
                  { backgroundColor: getStatusBgColor(course.status) }
                ]}>
                  <Text style={[
                    styles.statusText,
                    { color: getStatusColor(course.status) }
                  ]}>
                    {course.status}
                  </Text>
                </View>
              </View>

              <View style={styles.courseContent}>
                <View style={styles.courseHeader}>
                  <View style={styles.courseTitleContainer}>
                    <Text style={styles.courseTitle}>{course.title}</Text>
                    <View style={[
                      styles.levelBadge,
                      { backgroundColor: getLevelBgColor(course.level) }
                    ]}>
                      <Text style={[
                        styles.levelText,
                        { color: getLevelColor(course.level) }
                      ]}>
                        {course.level}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.courseInstructor}>by {course.instructor}</Text>
                </View>

                <View style={styles.courseStats}>
                  <View style={styles.courseStatItem}>
                    <Users size={14} color="#64748b" />
                    <Text style={styles.courseStatText}>{course.students}</Text>
                  </View>
                  <View style={styles.courseStatItem}>
                    <Clock size={14} color="#64748b" />
                    <Text style={styles.courseStatText}>{course.duration}</Text>
                  </View>
                  <View style={styles.courseStatItem}>
                    <BookOpen size={14} color="#64748b" />
                    <Text style={styles.courseStatText}>{course.lessons} lessons</Text>
                  </View>
                  <View style={styles.courseStatItem}>
                    <Star size={14} color="#f59e0b" />
                    <Text style={styles.courseStatText}>{course.rating}</Text>
                  </View>
                </View>

                <View style={styles.progressSection}>
                  <View style={styles.progressHeader}>
                    <Text style={styles.progressLabel}>Course Progress</Text>
                    <Text style={styles.progressValue}>{course.progress}%</Text>
                  </View>
                  <View style={styles.progressBar}>
                    <View 
                      style={[
                        styles.progressFill,
                        { width: `${course.progress}%` }
                      ]} 
                    />
                  </View>
                </View>

                <View style={styles.courseFooter}>
                  <View style={styles.priceContainer}>
                    <Text style={styles.coursePrice}>{course.price}</Text>
                    <Text style={styles.completionRate}>
                      {course.completionRate}% completion rate
                    </Text>
                  </View>
                  <View style={styles.courseActions}>
                    <TouchableOpacity style={styles.actionButton}>
                      <TrendingUp size={16} color="#64748b" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                      <Calendar size={16} color="#64748b" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, styles.primaryActionButton]}>
                      <Play size={16} color="#ffffff" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <TouchableOpacity style={styles.quickActionCard}>
            <View style={styles.quickActionIcon}>
              <Plus size={24} color="#3b82f6" />
            </View>
            <Text style={styles.quickActionTitle}>Create New Course</Text>
            <Text style={styles.quickActionSubtitle}>Start building your next course</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickActionCard}>
            <View style={styles.quickActionIcon}>
              <Award size={24} color="#10b981" />
            </View>
            <Text style={styles.quickActionTitle}>Course Analytics</Text>
            <Text style={styles.quickActionSubtitle}>View detailed performance metrics</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Inter-Bold',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Inter-Regular',
    marginTop: 2,
  },
  addButton: {
    backgroundColor: '#3b82f6',
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Inter-Bold',
    marginBottom: 2,
  },
  statTitle: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoriesContent: {
    paddingHorizontal: 20,
    gap: 12,
  },
  categoryTab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  categoryTabActive: {
    backgroundColor: '#3b82f6',
  },
  categoryTabText: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Inter-Medium',
  },
  categoryTabTextActive: {
    color: '#ffffff',
  },
  categoryTabBadge: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  categoryTabBadgeActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  categoryTabBadgeText: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Inter-SemiBold',
  },
  categoryTabBadgeTextActive: {
    color: '#ffffff',
  },
  coursesContainer: {
    paddingHorizontal: 20,
    gap: 20,
    marginBottom: 20,
  },
  courseCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  courseImageContainer: {
    position: 'relative',
  },
  courseImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  statusBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    textTransform: 'capitalize',
  },
  courseContent: {
    padding: 20,
  },
  courseHeader: {
    marginBottom: 16,
  },
  courseTitleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  courseTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Inter-Bold',
    marginRight: 12,
  },
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
  },
  courseInstructor: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Inter-Regular',
  },
  courseStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  courseStatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  courseStatText: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Inter-Medium',
  },
  progressSection: {
    marginBottom: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Inter-Medium',
  },
  progressValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Inter-Bold',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#f1f5f9',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 3,
  },
  courseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flex: 1,
  },
  coursePrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Inter-Bold',
    marginBottom: 2,
  },
  completionRate: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Inter-Regular',
  },
  courseActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryActionButton: {
    backgroundColor: '#3b82f6',
  },
  quickActionsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 16,
  },
  quickActionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  quickActionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Inter-Bold',
    marginBottom: 4,
  },
  quickActionSubtitle: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
});