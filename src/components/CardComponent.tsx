import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTFAMILY, FONTSIZE} from '@utils/GlobalStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CoffeeItem} from 'types/Coffee';

type CardComponentProp = {
  data: CoffeeItem;
};
const CardComponent: React.FC<CardComponentProp> = ({data}) => {
  return (
    <LinearGradient
      start={{x: 1, y: -5}}
      end={{x: 0, y: 1}}
      colors={[COLORS.primaryLightGreyHex, COLORS.primaryDarkGreyHex]}
      style={{
        flex: 1,
        width: 140,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        gap: 5,
      }}>
      <View
        style={{
          height: 120,
          width: '100%',
          borderRadius: 10,
          position: 'relative',
        }}>
        <Image
          source={data.imagelink_square}
          style={{height: '100%', width: '100%', borderRadius: 10}}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: COLORS.primaryBlackHex,
            height: 20,
            width: 50,
            borderBottomLeftRadius: 30,
            borderTopRightRadius: 10,
            opacity: 0.8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextComponent
            style={{
              fontSize: FONTSIZE.size_10,
              color: '#fff',
                          fontFamily: FONTFAMILY.poppins_medium,
              gap:5
            }}>
            <FontAwesome name="star" size={12} color="#f4c90b" />
            {data.average_rating}
          </TextComponent>
        </View>
      </View>

      <View style={{height: 40, width: '100%'}}>
        <TextComponent
          numberOfLines={1}
          style={{color: '#fff', fontSize: FONTSIZE.size_14}}>
          {data.name}
        </TextComponent>
        <TextComponent
          numberOfLines={1}
          style={{color: '#fff', fontSize: FONTSIZE.size_10}}>
          {data.special_ingredient}
        </TextComponent>
      </View>
      <View
        style={{
          height: 40,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextComponent style={{color: '#fff'}}>
          <TextComponent
            style={{color: COLORS.primaryOrangeHex, marginRight: 3}}>
            $
          </TextComponent>
          {data.prices[2].price}
        </TextComponent>
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: COLORS.primaryOrangeHex,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome name="plus" size={20} color="#fff" />
        </View>
      </View>
    </LinearGradient>
  );
};

export default CardComponent;

const styles = StyleSheet.create({});
