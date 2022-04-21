import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { BackIcon, EditIcon } from "../Constants/AppIcons";
import RoundButton from "../Components/RoundButton";
import DefaultTheme from "../Constants/DefaultTheme";
import RoundProfile from "../Components/RoundProfile";
import AppDimensions from "../Constants/AppDimensions";
import AppText from "../Components/AppText";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
} from "react-native-reanimated";
import HomeOptions from "./HomeOptions";

const Home = () => {
  const IMAGE_SIZE = AppDimensions.width / 3.5;
  const offset = useSharedValue(IMAGE_SIZE);
  const [showIndex, setShowIndex] = useState(null);
  const onIndexChange = (index) => {
    setShowIndex(index);
    if (index == null) {
      offset.value = IMAGE_SIZE;
    } else {
      offset.value = 0;
    }
  };
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(offset.value, {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
    };
  });
  const HeaderOptions = ({ showIndex }) => {
    return (
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: DefaultTheme.padding.extra_large * 1.5,
          paddingVertical: DefaultTheme.padding.medium,
          width: AppDimensions.width,
        }}
      >
        <RoundButton leftIcon={<BackIcon />} />
        <RoundButton
          leftIcon={
            showIndex != null ? (
              <EditIcon />
            ) : (
              <View style={{ paddingLeft: DefaultTheme.padding.small }}>
                <EditIcon />
              </View>
            )
          }
          textStyle={
            showIndex != null
              ? undefined
              : {
                  fontSize: DefaultTheme.textSize.medium,
                }
          }
          text={showIndex != null ? undefined : "Edit"}
        />
      </View>
    );
  };

  const UserProfile = () => (
    <View
      style={{
        alignSelf: "center",
        alignItems: "center",
        paddingTop: AppDimensions.width / 2,
      }}
    >
      <AppText.HeaderText
        children="Alex Solo"
        style={{ paddingTop: DefaultTheme.padding.large * 3 }}
      />
      <AppText.SmallText
        children="alex.solo@somemail.com"
        style={{ paddingTop: DefaultTheme.padding.large }}
      />
    </View>
  );

  return (
    <View
      style={{
        backgroundColor: DefaultTheme.colors.surface,
        alignSelf: "center",
      }}
    >
      <HeaderOptions showIndex={showIndex} />
      <Animated.View
        style={[
          {
            width: AppDimensions.width,
            alignItems: "center",
            position: "absolute",
            top: 7.5,
          },
          animatedStyles,
        ]}
      >
        <RoundProfile
          showIndex={showIndex}
          source={require("../assets/images/person.jpg")}
          height={AppDimensions.width / 3}
          width={AppDimensions.width / 3}
        />
      </Animated.View>
      <UserProfile />
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <HomeOptions onIndexChange={onIndexChange} />
      </View>
    </View>
  );
};

export default Home;
