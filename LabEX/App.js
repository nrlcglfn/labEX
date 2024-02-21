import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [currentSection, setCurrentSection] = useState('name');

  const resumeContent = {
    imageUrl: require('./profile.jpg'),

    name: 'Noriel B. Cagalfin',
    course: "Bachelor of Science in Information Technology",
    education: {
      elementary: 'Bagong Barrio Elementary School',
      elementaryYear: '2009',
      highSchool: 'Bagong Barrio National High School',
      highSchoolYear: '2015',
      seniorhighSchool: 'St. Bernadette College of Valenzuela',
      seniorhighYear: '2019',
      college: 'Global Reciprocal Colleges',
      collegeYear: '2021',
    },
    about: 'Hello! Im Noriel B Cagalfin, a passionate IT enthusiast with a Bachelors degree in Information Technology from Global Reciprocal College . My journey into the world of technology began at a young age when I was fascinated by the endless possibilities that computers offered. This early intrigue led me to pursue my BSIT, where Ive honed my skills in areas like software development, network administration, and system analysis.',
    contacts: {
      mobile: '0999-411-3577',
      email: 'norielcagalfin@gmail.com',
    },
  };

  const handlePress = () => {
  setCurrentSection((prevSections) => {
    switch (prevSections) {
      case 'name':
        return 'education';
      case 'education':
        return 'about';
      case 'about':
        return 'contacts';
      case 'contacts':
        return 'name';
      default:
        return 'name';
    }
  });
};

  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={handlePress} style={styles.contentContainer}>
          {currentSection === 'name' && (
            <>
              <Image source={resumeContent.imageUrl} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.header}>{resumeContent.name}</Text>
                <Text style={styles.info}>{resumeContent.course}</Text>
              </View>
            </>
          )}
          {currentSection === 'education' && (
            <View style={styles.textContainer}>
              <Text style={styles.header0}>Education</Text>
              <Text style={styles.projectitle}>{'\n'}College:{'\n'}</Text>
              <Text style={styles.info0}>{resumeContent.education.college} - {resumeContent.education.collegeYear}</Text>
              <Text style={styles.projectitle}>{'\n'}SeniorHighSchool:{'\n'}</Text>
              <Text style={styles.info0}>{resumeContent.education.seniorhighSchool} - {resumeContent.education.seniorhighYear}</Text>
              <Text style={styles.projectitle}>{'\n'}HighSchool:{'\n'}</Text>
              <Text style={styles.info0}>{resumeContent.education.highSchool} - {resumeContent.education.highSchoolYear}</Text>
              <Text style={styles.projectitle}>{'\n'}Elementary:{'\n'}</Text>
              <Text style={styles.info0}>{resumeContent.education.elementary} - {resumeContent.education.elementaryYear}</Text>
            </View>
          )}
          {currentSection === 'about' && (
            <View style={styles.textContainer}>
              <Text style={styles.header1}>About me:{'\n'}</Text>
              <Text style={styles.about}>{resumeContent.about}</Text>
            </View>
          )}
          {currentSection === 'contacts' && (
            <View style={styles.contactContainer}>
              <Text style={styles.header1}>Contact me:{'\n'}</Text>
              <Text style={styles.info1}>{'\n'} Mobile: {resumeContent.contacts.mobile}{'\n'} Email: {resumeContent.contacts.email}</Text>
            </View>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    marginBottom: 20,
    height: 200,
    width: 200,
    margin: 100,
    borderRadius: 100,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'left',
  },
  info: {
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
  info1: {
    fontSize: 20,
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  about: {
    fontSize: 20,
    textAlign: 'stretch',
  },
  projectitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  info0: {
    fontSize: 15,
    alignSelf: 'flex-start',
    textAlign: 'center',
  },
  header0: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  }

});

export default App;
