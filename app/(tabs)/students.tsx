import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Search, 
  Filter, 
  Plus, 
  Users, 
  Mail, 
  Phone,
  Calendar,
  BookOpen,
  Award,
  MoreVertical
} from 'lucide-react-native';

export default function StudentsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const students = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567',
      enrolledCourses: 3,
      completedCourses: 1,
      joinDate: '2024-01-15',
      status: 'active',
      avatar: 'SJ',
      progress: 75,
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike.chen@email.com',
      phone: '+1 (555) 234-5678',
      enrolledCourses: 2,
      completedCourses: 2,
      joinDate: '2023-11-20',
      status: 'active',
      avatar: 'MC',
      progress: 100,
      lastActivity: '1 day ago'
    },
    {
      id: 3,
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      phone: '+1 (555) 345-6789',
      enrolledCourses: 4,
      completedCourses: 0,
      joinDate: '2024-02-01',
      status: 'inactive',
      avatar: 'ED',
      progress: 25,
      lastActivity: '1 week ago'
    },
    {
      id: 4,
      name: 'Alex Thompson',
      email: 'alex.thompson@email.com',
      phone: '+1 (555) 456-7890',
      enrolledCourses: 1,
      completedCourses: 3,
      joinDate: '2023-09-10',
      status: 'active',
      avatar: 'AT',
      progress: 90,
      lastActivity: '3 hours ago'
    },
  ];

  const stats = [
    { title: 'Total Students', value: '2,847', icon: Users, color: '#3b82f6' },
    { title: 'Active Students', value: '2,156', icon: Users, color: '#10b981' },
    { title: 'New This Month', value: '234', icon: Plus, color: '#f59e0b' },
    { title: 'Completed Courses', value: '1,456', icon: Award, color: '#8b5cf6' },
  ];

  const filters = [
    { id: 'all', label: 'All Students', count: 2847 },
    { id: 'active', label: 'Active', count: 2156 },
    { id: 'inactive', label: 'Inactive', count: 691 },
    { id: 'new', label: 'New', count: 234 },
  ];

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
          <Text style={styles.headerTitle}>Students</Text>
          <Text style={styles.headerSubtitle}>Manage your student database</Text>
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

        {/* Search and Filter */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Search size={20} color="#64748b" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search students..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#94a3b8"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color="#64748b" />
          </TouchableOpacity>
        </View>

        {/* Filter Tabs */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filtersContainer}
          contentContainerStyle={styles.filtersContent}
        >
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter.id}
              style={[
                styles.filterTab,
                selectedFilter === filter.id && styles.filterTabActive
              ]}
              onPress={() => setSelectedFilter(filter.id)}
            >
              <Text style={[
                styles.filterTabText,
                selectedFilter === filter.id && styles.filterTabTextActive
              ]}>
                {filter.label}
              </Text>
              <View style={[
                styles.filterTabBadge,
                selectedFilter === filter.id && styles.filterTabBadgeActive
              ]}>
                <Text style={[
                  styles.filterTabBadgeText,
                  selectedFilter === filter.id && styles.filterTabBadgeTextActive
                ]}>
                  {filter.count}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Students List */}
        <View style={styles.studentsContainer}>
          {students.map((student) => (
            <View key={student.id} style={styles.studentCard}>
              <View style={styles.studentHeader}>
                <View style={styles.studentAvatar}>
                  <Text style={styles.studentAvatarText}>{student.avatar}</Text>
                </View>
                <View style={styles.studentInfo}>
                  <View style={styles.studentNameContainer}>
                    <Text style={styles.studentName}>{student.name}</Text>
                    <View style={[
                      styles.statusBadge,
                      { backgroundColor: getStatusBgColor(student.status) }
                    ]}>
                      <Text style={[
                        styles.statusText,
                        { color: getStatusColor(student.status) }
                      ]}>
                        {student.status}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.contactInfo}>
                    <View style={styles.contactItem}>
                      <Mail size={14} color="#64748b" />
                      <Text style={styles.contactText}>{student.email}</Text>
                    </View>
                    <View style={styles.contactItem}>
                      <Phone size={14} color="#64748b" />
                      <Text style={styles.contactText}>{student.phone}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={styles.moreButton}>
                  <MoreVertical size={20} color="#64748b" />
                </TouchableOpacity>
              </View>

              <View style={styles.studentStats}>
                <View style={styles.statItem}>
                  <BookOpen size={16} color="#64748b" />
                  <Text style={styles.statItemText}>
                    {student.enrolledCourses} Enrolled
                  </Text>
                </View>
                <View style={styles.statItem}>
                  <Award size={16} color="#64748b" />
                  <Text style={styles.statItemText}>
                    {student.completedCourses} Completed
                  </Text>
                </View>
                <View style={styles.statItem}>
                  <Calendar size={16} color="#64748b" />
                  <Text style={styles.statItemText}>
                    Joined {new Date(student.joinDate).toLocaleDateString()}
                  </Text>
                </View>
              </View>

              <View style={styles.progressContainer}>
                <View style={styles.progressHeader}>
                  <Text style={styles.progressLabel}>Overall Progress</Text>
                  <Text style={styles.progressValue}>{student.progress}%</Text>
                </View>
                <View style={styles.progressBar}>
                  <View 
                    style={[
                      styles.progressFill,
                      { width: `${student.progress}%` }
                    ]} 
                  />
                </View>
                <Text style={styles.lastActivity}>
                  Last activity: {student.lastActivity}
                </Text>
              </View>
            </View>
          ))}
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
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 16,
    gap: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1e293b',
    fontFamily: 'Inter-Regular',
  },
  filterButton: {
    backgroundColor: '#ffffff',
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  filtersContainer: {
    marginBottom: 20,
  },
  filtersContent: {
    paddingHorizontal: 20,
    gap: 12,
  },
  filterTab: {
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
  filterTabActive: {
    backgroundColor: '#3b82f6',
  },
  filterTabText: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Inter-Medium',
  },
  filterTabTextActive: {
    color: '#ffffff',
  },
  filterTabBadge: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  filterTabBadgeActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  filterTabBadgeText: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Inter-SemiBold',
  },
  filterTabBadgeTextActive: {
    color: '#ffffff',
  },
  studentsContainer: {
    paddingHorizontal: 20,
    gap: 16,
    paddingBottom: 20,
  },
  studentCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  studentHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  studentAvatar: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  studentAvatarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
  },
  studentInfo: {
    flex: 1,
  },
  studentNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Inter-Bold',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    textTransform: 'capitalize',
  },
  contactInfo: {
    gap: 4,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  contactText: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Inter-Regular',
  },
  moreButton: {
    padding: 4,
  },
  studentStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statItemText: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Inter-Medium',
  },
  progressContainer: {
    gap: 8,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  lastActivity: {
    fontSize: 12,
    color: '#94a3b8',
    fontFamily: 'Inter-Regular',
  },
});