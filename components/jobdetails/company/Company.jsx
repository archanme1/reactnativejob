import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";

const Company = ({ companyLogo, jobTitle, comapnyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: companyLogo
              ? companyLogo
              : "https://static6.depositphotos.com/1037613/650/i/950/depositphotos_6509200-stock-photo-searching-for-jobs.jpg",
          }}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{comapnyName}</Text>
        <View style={styles.locationBox}>
          <Image source={icons.location} style={styles.locationImage} />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
