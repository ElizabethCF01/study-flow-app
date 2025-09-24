import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ExploreScreen = () => {
  return (
    <LinearGradient colors={['#25253eff', '#16213e', '#0f172a']} style={styles.container}>
      <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#3b3b60ff" />
      <Text style={styles.header}>Explore</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search genres, moods, activities..."
        placeholderTextColor="#55ed1eff"
      />
      <View style={styles.categoryRow}>
        <LinearGradient colors={['#ffffffff', '#6a1d89ff']} style={[styles.categoryButton, styles.focusButton]}>
          <Text style={styles.categoryText}>Focus</Text>
        </LinearGradient>
        <LinearGradient colors={['#2e2e44', '#3a3a5e']} style={styles.categoryButton}>
          <Text style={styles.categoryText}>Relax</Text>
        </LinearGradient>
        <LinearGradient colors={['#2e2e44', '#3a3a5e']} style={styles.categoryButton}>
          <Text style={styles.categoryText}>Sleep</Text>
        </LinearGradient>
        <LinearGradient colors={['#2e2e44', '#3a3a5e']} style={styles.categoryButton}>
          <Text style={styles.categoryText}>Meditate</Text>
        </LinearGradient>
      </View>
      <Text style={styles.sectionTitle}>Genres</Text>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>MUSIC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>NATURE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.grid}>
        {[
          { name: 'Acoustic', icon: '🎸' },
          { name: 'Atmospheric', icon: '✨' },
          { name: 'Beach', icon: '🏖️' },
          { name: 'Electronic', icon: '🎹' },
          { name: 'Forest', icon: '🌲' },
          { name: 'Grooves', icon: '🥁' },
          { name: 'Rain', icon: '🌧️' },
          { name: 'Rainforest', icon: '🌴' },
          { name: 'River', icon: '🌊' },
        ].map((item) => (
          <LinearGradient key={item.name} colors={['#2e2e44', '#3a3a5e']} style={styles.genreButton}>
            <Text style={styles.genreIcon}>{item.icon}</Text>
            <Text style={styles.genreText}>{item.name}</Text>
          </LinearGradient>
        ))}
      </View>
      <Text style={styles.sectionTitle}>Moods</Text>
      <View style={styles.grid}>
        {['Brooding', 'Calm', 'Chill', 'Dark', 'Down', 'Epic', 'Floating', 'Heavy', 'Hopeful', 'Intense', 'Optimistic', 'Playful', 'Ponderous', 'Serene'].map((mood) => (
          <LinearGradient key={mood} colors={['#2e2e44', '#3a3a5e']} style={styles.genreButton}>
            <Text style={styles.genreText}>{mood}</Text>
            {}
          </LinearGradient>
        ))}
      </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    padding: 10,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  searchBar: {
    backgroundColor: '#2e2e44',
    borderRadius: 20,
    padding: 10,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 20,
    width: '23%',
    alignItems: 'center',
  },
  focusButton: {
    backgroundColor: '#fff',
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    padding: 5,
  },
  tabText: {
    color: '#888',
    fontSize: 14,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  genreButton: {
    padding: 10,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
    marginBottom: 10,
  },
  genreIcon: {
    fontSize: 16,
    marginBottom: 5,
  },
  genreText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ExploreScreen;