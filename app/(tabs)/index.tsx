import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  Clock,
  Award,
  AlertCircle,
  Plus,
  Eye
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function DashboardScreen() {
  const stats = [
    { 
      title: 'Total Students', 
      value: '2,847', 
      change: '+12%',
      changeType: 'positive',
      icon: Users, 
      color: '#3b82f6',
      bgColor: '#eff6ff'
    },
    { 
      title: 'Active Courses', 
      value: '156', 
      change: '+8%',
      changeType: 'positive',
      icon: BookOpen, 
      color: '#10b981',
      bgColor: '#ecfdf5'
    },
    { 
      title: 'Monthly Revenue', 
      value: '$45,678', 
      change: '+23%',
      changeType: 'positive',
      icon: DollarSign, 
      color: '#f59e0b',
      bgColor: '#fffbeb'
    },
    { 
      title: 'Completion Rate', 
      value: '87%', 
      change: '+5%',
      changeType: 'positive',
      icon: TrendingUp, 
      color: '#8b5cf6',
      bgColor: '#f3e8ff'
    },
  ];

  const recentActivities = [
    { 
      id: 1, 
      title: 'New student enrolled in React Course', 
      time: '2 minutes ago', 
      type: 'enrollment',
      student: 'Sarah Johnson'
    },
    { 
      id: 2, 
      title: 'Course "Advanced JavaScript" completed', 
      time: '15 minutes ago', 
      type: 'completion',
      student: 'Mike Chen'
    },
    { 
      id: 3, 
      title: 'Payment received from Premium Plan', 
      time: '1 hour ago', 
      type: 'payment',
      amount: '$299'
    },
    { 
      id: 4, 
      title: 'New instructor application received', 
      time: '2 hours ago', 
      type: 'application',
      instructor: 'Dr. Emily Davis'
    },
  ];

  const upcomingClasses = [
    {
      id: 1,
      title: 'React Native Fundamentals',
      instructor: 'John Smith',
      time: '10:00 AM',
      students: 24,
      duration: '2h'
    },
    {
      id: 2,
      title: 'Advanced Python Programming',
      instructor: 'Maria Garcia',
      time: '2:00 PM',
      students: 18,
      duration: '1.5h'
    },
    {
      id: 3,
      title: 'UI/UX Design Workshop',
      instructor: 'Alex Thompson',
      time: '4:30 PM',
      students: 32,
      duration: '3h'
    },
  ];

  const quickActions = [
    { title: 'Add Student', icon: Users, color: '#3b82f6' },
    { title: 'Create Course', icon: BookOpen, color: '#10b981' },
    { title: 'Schedule Class', icon: Calendar, color: '#f59e0b' },
    { title: 'View Reports', icon: TrendingUp, color: '#8b5cf6' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning! 👋</Text>
            <Text style={styles.headerTitle}>Education Dashboard</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <AlertCircle size={24} color="#64748b" />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={[styles.statCard, { width: (width - 48) / 2 }]}>
              <View style={[styles.statIconContainer, { backgroundColor: stat.bgColor }]}>
                <stat.icon size={24} color={stat.color} />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statTitle}>{stat.title}</Text>
              <View style={styles.statChangeContainer}>
                <Text style={[styles.statChange, { color: stat.color }]}>
                  {stat.change}
                </Text>
                <Text style={styles.statChangeLabel}>vs last month</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsContainer}>
            {quickActions.map((action, index) => (
              <TouchableOpacity key={index} style={styles.quickActionButton}>
                <View style={[styles.quickActionIcon, { backgroundColor: `${action.color}15` }]}>
                  <action.icon size={20} color={action.color} />
                </View>
                <Text style={styles.quickActionText}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Upcoming Classes */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's Classes</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.classesContainer}>
            {upcomingClasses.map((classItem) => (
              <View key={classItem.id} style={styles.classCard}>
                <View style={styles.classHeader}>
                  <View style={styles.classTimeContainer}>
                    <Clock size={16} color="#64748b" />
                    <Text style={styles.classTime}>{classItem.time}</Text>
                  </View>
                  <Text style={styles.classDuration}>{classItem.duration}</Text>
                </View>
                <Text style={styles.classTitle}>{classItem.title}</Text>
                <Text style={styles.classInstructor}>by {classItem.instructor}</Text>
                <View style={styles.classFooter}>
                  <View style={styles.studentsContainer}>
                    <Users size={14} color="#64748b" />
                    <Text style={styles.studentsCount}>{classItem.students} students</Text>
                  </View>
                  <TouchableOpacity style={styles.joinButton}>
                    <Eye size={14} color="#3b82f6" />
                    <Text style={styles.joinButtonText}>Join</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Activities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activities</Text>
          <View style={styles.activitiesContainer}>
            {recentActivities.map((activity) => (
              <View key={activity.id} style={styles.activityItem}>
                <View style={[styles.activityIcon, { 
                  backgroundColor: activity.type === 'enrollment' ? '#eff6ff' :
                                  activity.type === 'completion' ? '#ecfdf5' :
                                  activity.type === 'payment' ? '#fffbeb' : '#f3e8ff'
                }]}>
                  {activity.type === 'enrollment' && <Users size={16} color="#3b82f6" />}
                  {activity.type === 'completion' && <Award size={16} color="#10b981" />}
                  {activity.type === 'payment' && <DollarSign size={16} color="#f59e0b" />}
                  {activity.type === 'application' && <BookOpen size={16} color="#8b5cf6" />}
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>{activity.title}</Text>
                  <Text style={styles.activityTime}>{activity.time}</Text>
                </View>
              </View>
            ))}
          </View>
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
  greeting: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Inter-Regular',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Inter-Bold',
    marginTop: 4,
  },
  notificationButton: {
    position: 'relative',
    padding: 8,
  },
  notificationBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#ef4444',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 16,
  },
  statCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Inter-Bold',
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Inter-Medium',
    marginBottom: 8,
  },
  statChangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statChange: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
  },
  statChangeLabel: {
    fontSize: 12,
    color: '#94a3b8',
    fontFamily: 'Inter-Regular',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Inter-Bold',
  },
  seeAllText: {
    fontSize: 14,
    color: '#3b82f6',
    fontFamily: 'Inter-SemiBold',
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  quickActionButton: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
  },
  classesContainer: {
    gap: 12,
  },
  classCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  classHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  classTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  classTime: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Inter-Medium',
  },
  classDuration: {
    fontSize: 12,
    color: '#94a3b8',
    fontFamily: 'Inter-Regular',
  },
  classTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Inter-Bold',
    marginBottom: 4,
  },
  classInstructor: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Inter-Regular',
    marginBottom: 12,
  },
  classFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  studentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  studentsCount: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Inter-Regular',
  },
  joinButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#eff6ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  joinButtonText: {
    fontSize: 12,
    color: '#3b82f6',
    fontFamily: 'Inter-SemiBold',
  },
  activitiesContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    gap: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    color: '#1e293b',
    fontFamily: 'Inter-Medium',
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 12,
    color: '#94a3b8',
    fontFamily: 'Inter-Regular',
  },
});