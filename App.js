import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cities: [
        { name: "New York", temp: 80, key: 'ny' },
        { name: "Chicago", temp: 74, key: 'chi' },
        { name: "Los Angeles", temp: 72, key: 'la' },
        { name: "Miami", temp: 93, key: 'mia' },
        { name: "Anchorage", temp: 45, key: 'anc'}
      ]
    };
  }
  
  updateWeather = () => {
    let tempCities = this.state.cities.slice(); // clone the list of cities 
    for (c of tempCities) {
      c.temp = Math.round(Math.random() * 100);
    }
    this.setState((prevState) => {
      return {
        cities: tempCities 
      }
    });
  }

  render() {
    console.log('rendering');
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Totally Accurate Weather</Text>
          </View>
          <View style={styles.body}>
            <FlatList
              data={this.state.cities}
              renderItem={({item}) => 
                <View style={styles.cwItem}>
                  <Text style={styles.cwItemText}>{item.name}</Text>
                  <Text style={styles.cwItemText}>{item.temp}</Text>
                </View>
              }
              />
          </View>
          <View style={styles.footer}>
            <TouchableOpacity 
              onPress={this.updateWeather}
              style={styles.refresh}>
              <Text>
                Check Weather
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  header: {
    flex: 0.2,
    backgroundColor: 'goldenrod',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 32,
    alignSelf: 'center'
  },
  cwItem: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '80%',
    margin: 10,
    padding: 10,
  },
  cwItemText: {
    fontSize: 24,
  },
  footer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  refresh: {
    height: 70,
    width: 130,
    backgroundColor: '#aaf',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    color: 'white'
  }
});
