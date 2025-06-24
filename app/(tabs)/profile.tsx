import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Users,
  TrendingUp
} from 'lucide-react-native';

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const profileStats = [
    { title: 'Courses Created', value: '24', icon: BookOpen, color: '#3b82f6' },
    { title: 'Total Students', value: '1,247', icon: Users, color: '#10b981' },
    { title: 'Avg. Rating', value: '4.8', icon: Award, color: '#f59e0b' },
    { title: 'Revenue', value: '$12,450', icon: TrendingUp, color: '#8b5cf6' },
  ];

  const menuSections = [
    {
      title: 'Account',
      items: [
        { title: 'Personal Information', icon: User, action: 'navigate' },
        { title: 'Account Settings', icon: Settings, action: 'navigate' },
        { title: 'Notifications', icon: Bell, action: 'toggle', value: notificationsEnabled, onToggle: setNotificationsEnabled },
      ]
    },
    {
      title: 'Preferences',
      items: [
        { title: 'Dark Mode', icon: Shield, action: 'toggle', value: darkModeEnabled, onToggle: setDarkModeEnabled },
        { title: 'Privacy & Security', icon: Shield, action: 'navigate' },
      ]
    },
    {
      title: 'Support',
      items: [
        { title: 'Help Center', icon: HelpCircle, action: 'navigate' },
        { title: 'Contact Support', icon: Mail, action: 'navigate' },
      ]
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.editButton}>
            <Settings size={20} color="#64748b" />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JD</Text>
            </View>
            <View style={styles.onlineIndicator} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileRole}>Senior Instructor</Text>
            <View style={styles.profileDetails}>
              <View style={styles.profileDetailItem}>
                <Mail size={14} color="#64748b" />
                <Text style={styles.profileDetailText}>john.doe@iqcrm.com</Text>
              </View>
              <View style={styles.profileDetailItem}>
                <Phone size={14} color="#64748b" />
                <Text style={styles.profileDetailText}>+1 (555) 123-4567</Text>
              </View>
              <View style={styles.profileDetailItem}>
                <MapPin size={14} color="#64748b" />
                <Text style={styles.profileDetailText}>San Francisco, CA</Text>
              </View>
              <View style={styles.profileDetailItem}>
                <Calendar size={14} color="#64748b" />
                <Text style={styles.profileDetailText}>Joined March 2023</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>Your Performance</Text>
          <View style={styles.statsGrid}>
            {profileStats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <View style={[styles.statIcon, { backgroundColor: `${stat.color}15` }]}>
                  <stat.icon size={20} color={stat.color} />
                </View>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statTitle}>{stat.title}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Achievement Badge */}
        <View style={styles.achievementCard}>
          <View style={styles.achievementIcon}>
            <Award size={24} color="#f59e0b" />
          </View>
          <View style={styles.achievementContent}>
            <Text style={styles.achievementTitle}>Top Instructor</Text>
            <Text style={styles.achievementDescription}>
              You're in the top 5% of instructors this month!
            </Text>
          </View>
          <ChevronRight size={20} color="#64748b" />
        </View>

        {/* Menu Sections */}
        {menuSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.menuSection}>
            <Text style={styles.menuSectionTitle}>{section.title}</Text>
            <View style={styles.menuItems}>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity 
                  key={itemIndex} 
                  style={[
                    styles.menuItem,
                    itemIndex === section.items.length - 1 && styles.menuItemLast
                  ]}
                >
                  <View style={styles.menuItemLeft}>
                    <View style={styles.menuItemIcon}>
                      <item.icon size={20} color="#64748b" />
                    </View>
                    <Text style={styles.menuItemText}>{item.title}</Text>
                  </View>
                  <View style={styles.menuItemRight}>
                    {item.action === 'toggle' ? (
                      <Switch
                        value={item.value}
                        onValueChange={item.onToggle}
                        trackColor={{ false: '#f1f5f9', true: '#3b82f6' }}
                        thumbColor={item.value ? '#ffffff' : '#ffffff'}
                      />
                    ) : (
                      <ChevronRight size={20} color="#94a3b8" />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color="#ef4444" />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>

        {/* App Version */}
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>iQCRM Education Platform</Text>
          <Text style={styles.versionNumber}>Version 1.0.0</Text>
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
  editButton: {
    padding: 8,
  },
  profileCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  avatarContainer: {
    position: 'relative',
    alignSelf: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#10b981',
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Inter-Bold',
    marginBottom: 4,
  },
  profileRole: {
    fontSize: 16,
    color: '#3b82f6',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 16,
  },
  profileDetails: {
    width: '100%',
    gap: 8,
  },
  profileDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  profileDetailText: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Inter-Regular',
  },
  statsContainer: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Inter-Bold',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    flex: 1,
    minWidth: '47%',
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
    fontSize: 20,
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
  achievementCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#fffbeb',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Inter-Bold',
    marginBottom: 2,
  },
  achievementDescription: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Inter-Regular',
  },
  menuSection: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  menuSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Inter-Bold',
    marginBottom: 12,
  },
  menuItems: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  menuItemLast: {
    borderBottomWidth: 0,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuItemText: {
    fontSize: 16,
    color: '#1e293b',
    fontFamily: 'Inter-Medium',
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 16,
    paddingVertical: 16,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ef4444',
    fontFamily: 'Inter-Bold',
  },
  versionContainer: {
    alignItems: 'center',
    paddingVertical: 24,
    gap: 4,
  },
  versionText: {
    fontSize: 14,
    color: '#64748b',
    fontFamily: 'Inter-Medium',
  },
  versionNumber: {
    fontSize: 12,
    color: '#94a3b8',
    fontFamily: 'Inter-Regular',
  },
});