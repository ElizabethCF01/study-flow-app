// import { LinearGradient } from 'expo-linear-gradient';
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image,  } from 'react-native';
// import { Slider } from '@gluestack-ui/themed';

// const MusicPlayerScreen = () => {
//   const playlist = [
//     { title: 'Rain on my window', subtitle: 'Deep Focus | 12-30 Hz', image: require('./assets/rain.jpg') },
//     { title: 'Clear my mind', subtitle: 'Exam Cram | 12-30 Hz', image: require('./assets/clear.jpg') },
//     { title: 'Into the clouds', subtitle: 'Deep Focus | 12-30 Hz', image: require('./assets/clouds.jpg') },
//     { title: 'Lost in shadows', subtitle: 'Exam Cram | 12-30 Hz', image: require('./assets/shadows.jpg') },
//     { title: 'Lantern Orchestra', subtitle: '12-30 Hz', image: require('./assets/lantern.jpg') },
//   ];

//   return (
//     <LinearGradient colors={['#1a1a2e', '#16213e', '#0f172a']} style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <Text style={styles.backButton}>←</Text>
//         </TouchableOpacity>
//         <Text style={styles.title}>Rainy Day Reads</Text>
//         <TouchableOpacity>
//           <View style={styles.timer}>
//             <Text style={styles.timerText}>25 min</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//       <Image source={require('./assets/sea_shores.jpg')} style={styles.coverImage} />
//       <View style={styles.info}>
//         <Text style={styles.trackTitle}>Sea Shores</Text>
//         <Text style={styles.trackSubtitle}>22 songs</Text>
//       </View>
//       <View style={styles.playlist}>
//         {playlist.map((item, index) => (
//           <View key={index} style={styles.playlistItem}>
//             <Image source={item.image} style={styles.itemImage} />
//             <View style={styles.itemText}>
//               <Text style={styles.itemTitle}>{item.title}</Text>
//               <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
//             </View>
//           </View>
//         ))}
//       </View>
//       <View style={styles.controls}>
//         <Slider
//           style={styles.progressBar}
//           minimumValue={0}
//           maximumValue={1}
//           value={0.2}
//           minimumTrackTintColor="#00aaff"
//           maximumTrackTintColor="#666"
//           thumbTintColor="#00aaff"
//         />
//         <View style={styles.time}>
//           <Text style={styles.timeText}>1:43</Text>
//           <Text style={styles.timeText}>-59:04</Text>
//         </View>
//         <View style={styles.playControls}>
//           <TouchableOpacity>
//             <Text style={styles.controlButton}>⏪</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.playButton}>
//               <Text style={styles.playButtonText}>▶</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Text style={styles.controlButton}>⏩</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   backButton: {
//     color: '#fff',
//     fontSize: 20,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   timer: {
//     backgroundColor: '#00aaff',
//     borderRadius: 10,
//     padding: 5,
//   },
//   timerText: {
//     color: '#fff',
//     fontSize: 12,
//   },
//   coverImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   info: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   trackTitle: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   trackSubtitle: {
//     color: '#888',
//     fontSize: 14,
//   },
//   playlist: {
//     flex: 1,
//   },
//   playlistItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   itemImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 5,
//     marginRight: 10,
//   },
//   itemText: {
//     flex: 1,
//   },
//   itemTitle: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   itemSubtitle: {
//     color: '#888',
//     fontSize: 12,
//   },
//   controls: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   progressBar: {
//     width: '100%',
//     height: 40,
//   },
//   time: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 10,
//   },
//   timeText: {
//     color: '#fff',
//     fontSize: 12,
//   },
//   playControls: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '60%',
//   },
//   controlButton: {
//     color: '#fff',
//     fontSize: 20,
//   },
//   playButton: {
//     backgroundColor: '#00aaff',
//     borderRadius: 30,
//     width: 60,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   playButtonText: {
//     color: '#fff',
//     fontSize: 20,
//   },
// });

// export default MusicPlayerScreen;