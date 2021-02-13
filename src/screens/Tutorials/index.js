import React, { useState, useEffect } from 'react';
import { Platform, Dimensions } from 'react-native';

import { Container } from '../../components/Containers/index';

import { useSelector, useDispatch } from 'react-redux';

import AppIntroSlider from 'react-native-app-intro-slider';

import { logo, Slide_one } from "@Image/Icon"
import { AppView, AppText, AppImage, Touchable, AppbackgraoundImage } from '../../components/Atoms';
import styles from './style';

import { LIGHT_GREEN, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE } from '../../global/Colors';
// import {  } from '../../Assets/Icon';

// import { RF } from "@Global/Responsive";
import { RF } from "../../global/Responsive";
import { Actions } from 'react-native-router-flux';
import { SANS_PRO_REGULAR } from '../../global/FontFamilies';
import { Skip_button } from '../../assets/Icon';
// import { BUTTON_SHORT } from '../../components/Molecules';
const { height, width } = Dimensions.get('window');

export default Tutorial = (props) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state).reducer
  const { Skip} = state.language.TUTORIAL
  const slides = [
    {
      key: 1,
      title: 'Accept a job!',
      text: "LoreLorum Impsum is simply dummy text the printing and typesetting industry.",
      image: Slide_one,
    },
    {
      key: 2,
      title: 'Professionals you can trust',
      text: "LoreLorum Impsum is simply dummy text the printing and typesetting industry.",
      image: Slide_one,
    }
  ];


  const _renderItem = ({ item }) => {
    return (
      <AppView style={[styles.sliderLayout]}>
        <AppView style={[]}>
          <AppImage style={[styles.itemImg]} source={item.image} />
        </AppView>
        <AppView style={[styles.itemHeadingView]}>
          <AppText style={[styles.itemHeadingTxt]}>{item.title}</AppText>
        </AppView>
        <AppView style={[styles.itemDiscription]}>
          <AppText style={[styles.itemDescriptionTxt]}>{item.text}</AppText>
        </AppView>
      </AppView>
    );
  }


  return (
    <Container Containerlayout={[styles.containerLayout]} scrollable header={false} >
      <AppView style={[styles.logoImgView]}>
        <AppImage source={logo} style={[styles.logoImg]} />
      </AppView>
      <AppView style={[styles.sliderLayoutContainer]}>
        <AppIntroSlider
          dotStyle={{ backgroundColor: LIGHT_BROWN, }}
          activeDotStyle={{ backgroundColor: LIGHT_GREEN }}
          renderItem={_renderItem} nextLabel={false}
          doneLabel={false} data={slides}
          keyExtractor={(item) => item.key.toString()}
        />
      </AppView>
      <AppView style={[styles.btnView]}>
        <Touchable onPress={()=>Actions.Options()}>
          <AppbackgraoundImage
            resizeMode="contain"
            style={styles.shortBtnLayout}
            source={Skip_button}
          >
            <AppText style={[styles.shortBtnTxt]}>{Skip}</AppText>

          </AppbackgraoundImage>
        </Touchable>

  
      </AppView>
    </Container>
  )
}