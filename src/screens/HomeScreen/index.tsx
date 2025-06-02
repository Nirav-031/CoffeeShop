import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE} from '@utils/GlobalStyle';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextComponent from '@components/TextComponent';
import CoffeeData from '../../data/CoffeeData';
import CardComponent from '@components/CardComponent';
import { CoffeeItem } from 'types/Coffee';

const index = () => {
  const [category, setCategory] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('Americano');
  const [filteredData, setFilteredData] = useState<CoffeeItem[] | null>([]);
  const scrollViewRef = useRef<ScrollView>(null);

  function handleFilterData() {
    return CoffeeData.filter(data => data.name === activeFilter);
  }
  function getAllCategory() {
    return CoffeeData.map(data => data.name);
  }
  
  useEffect(() => {
    let data = CoffeeData;

    if(activeFilter == "All")
    {
      data=CoffeeData.filter(data => data);
    }
    else {
      data= CoffeeData.filter(data => data.name === activeFilter);
    }
    setFilteredData(data);
  }, [activeFilter]);
  useEffect(() => {
    const data = getAllCategory();
    const unique = data.reduce(
      (acc: string[], curr: string) => {
        if (!acc.includes(curr)) acc.push(curr);
        return acc;
      },
      ['All'],
    );
    
    setFilteredData(CoffeeData)
    setCategory(unique);
  }, []);

  function handleActiveFilter(filter: string, index: number) {
    setActiveFilter(filter);

    // Scroll to the selected filter
    if (scrollViewRef.current) {
      // Calculate approximate position (you may need to adjust the multiplier based on your item width)
      const itemWidth = 70; // Approximate width of each filter item including gap
      const scrollPosition = index * itemWidth;

      scrollViewRef.current.scrollTo({
        x: scrollPosition,
        animated: true,
      });
    }
  }

  console.log(category);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{flex: 1, padding: 16}}>
      <StatusBar
        backgroundColor={COLORS.primaryBlackHex}
        barStyle="light-content"
      />
      <View style={styles.topContainer}>
        <View style={styles.drawerIconContainer}>
          <LinearGradient
            start={{x: 0, y: -1.2}}
            end={{x: 1, y: 0}}
            colors={[COLORS.primaryLightGreyHex, COLORS.primaryDarkGreyHex]}
            style={styles.drawerIconContainer}>
            <MaterialCommunityIcons
              name="microsoft"
              size={24}
              color={COLORS.primaryLightGreyHex}
            />
          </LinearGradient>
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require('@assets/app_images/avatar.png')}
            style={styles.profileImage}
          />
        </View>
      </View>
      <TextComponent style={styles.upperText}>Find the best</TextComponent>
      <TextComponent style={styles.lowerText}>coffee for you</TextComponent>
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons
          name="magnify"
          size={24}
          color={COLORS.primaryLightGreyHex}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor={COLORS.primaryLightGreyHex}
          style={styles.searchInput}
        />
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        style={{maxHeight: 30, marginVertical: 10}}
        contentContainerStyle={{gap: 10}}
        showsHorizontalScrollIndicator={false}>
        {category.map((cat, index) => {
          return (
            <Pressable
              style={[
                styles.filterItem,
                activeFilter == cat && {
                  borderBottomWidth: 3,
                  borderBottomColor: COLORS.primaryOrangeHex,
                },
              ]}
              key={index}
              onPress={() => handleActiveFilter(cat, index)}>
              <TextComponent style={{color: '#fff'}}>{cat}</TextComponent>
            </Pressable>
          );
        })}
      </ScrollView>
      <ScrollView
        style={{maxHeight: 230, marginTop: 15}}
        contentContainerStyle={{gap: 10}}
        horizontal={true}>
        {filteredData?.map(item => (
          <CardComponent data={item} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  text: {
    color: COLORS.primaryWhiteHex,
    fontSize: 20,
    fontWeight: 'bold',
  },
  topContainer: {
    // backgroundColor:"red",
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  drawerIconContainer: {
    height: '100%',
    // backgroundColor: COLORS.primaryLightGreyHex,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    height: '100%',
    width: 40,
    borderRadius: 10,
    overflow: 'hidden',
  },
  profileImage: {
    height: 40,
    borderRadius: 10,
    width: 40,
    overflow: 'hidden',
  },
  upperText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_30,
    fontWeight: 'bold',
    marginTop: 40,
  },
  lowerText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_30,
    fontWeight: 'bold',
  },
  searchContainer: {
    height: 50,
    width: '100%',
    backgroundColor: COLORS.primaryDarkGreyHex,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
    marginLeft: 10,
    fontFamily: FONTFAMILY.poppins_regular,
  },
  filterItem: {
    paddingHorizontal: 8,
    minWidth: 60,
    alignItems: 'center',
  },
});
