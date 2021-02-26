import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// ICON
import MenuIcon from '../../assets/icons/menu.svg';
import DollarIcon from '../../assets/icons/dollar.svg';
import SearchIcon from '../../assets/icons/search.svg';
import SettingIcon from '../../assets/icons/settings.svg';
import GroceryIcon from '../../assets/icons/grocery.svg';
import ElectronicsIcon from '../../assets/icons/electronics.svg';
import FoodIcon from '../../assets/icons/food.svg';
import RetailIcon from '../../assets/icons/retail.svg';
import FruitsIcon from '../../assets/icons/fruits.svg';
import VegetablesIcon from '../../assets/icons/vegetables.svg';
import TvIcon from '../../assets/icons/tv.svg';
import McIcon from '../../assets/icons/washing.svg';

// ICON BOTTOM NAVIGATION
import HomeIcon from '../../assets/icons/home.svg';
import PurseIcon from '../../assets/icons/purse.svg';
import ChatIcon from '../../assets/icons/chat.svg';
import UserIcon from '../../assets/icons/user.svg';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        // translucent={true}
        backgroundColor="#fcfcfc"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.home}>
          <View style={styles.headerHome}>
            <MenuIcon width={25} height={25} />
            <DollarIcon width={25} height={25} />
          </View>
          <View style={styles.judulHome}>
            <Text style={styles.descJudulHome}>E shopping</Text>
            <Text style={styles.descDeskripsiHome}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              dolorum incidunt ab deserunt expedita.
            </Text>
          </View>
          <View style={styles.searchSetting}>
            <View style={styles.boxInputSearch}>
              <TextInput placeholder="Search" style={styles.inputSearch} />
            </View>
            <SearchIcon width={19} height={19} style={styles.iconSearch} />
            <SettingIcon width={25} height={25} />
          </View>
          <View style={styles.categories}>
            <Text style={styles.judulCategories}>Categories</Text>
            <View style={styles.coverMenuCategories}>
              <View style={styles.isiMenuCategories}>
                <View style={styles.boxIconCategoriesActive}>
                  <GroceryIcon width={35} height={35} />
                </View>
                <Text style={styles.descIconCategories}>Grocery</Text>
              </View>
              <View style={styles.isiMenuCategories}>
                <View style={styles.boxIconCategories}>
                  <ElectronicsIcon width={35} height={35} />
                </View>
                <Text style={styles.descIconCategories}>Electronics</Text>
              </View>
              <View style={styles.isiMenuCategories}>
                <View style={styles.boxIconCategories}>
                  <FoodIcon width={35} height={35} />
                </View>
                <Text style={styles.descIconCategories}>Food</Text>
              </View>
              <View style={styles.isiMenuCategories}>
                <View style={styles.boxIconCategories}>
                  <RetailIcon width={35} height={35} />
                </View>
                <Text style={styles.descIconCategories}>Retail</Text>
              </View>
            </View>
          </View>
          <View style={styles.categories}>
            <View style={styles.headerListProduct}>
              <Text style={styles.judulListProduct}>Grocery</Text>
              <Text style={styles.viewallListProduct}>View All</Text>
            </View>
            <View style={styles.coverMenuCategories}>
              <View style={styles.isiListProduct}>
                <FruitsIcon width={115} height={115} />
                <View style={styles.boxDescListProduct}>
                  <Text style={styles.judulLp}>Fruits</Text>
                  <Text style={styles.descLp}>
                    Lorem ipsum dolor, sit amet consec
                  </Text>
                  <Text style={styles.jarakLp}>124m</Text>
                </View>
              </View>
              <View style={styles.isiListProduct}>
                <VegetablesIcon width={115} height={115} />
                <View style={styles.boxDescListProduct}>
                  <Text style={styles.judulLp}>Vegetable</Text>
                  <Text style={styles.descLp}>
                    Lorem ipsum dolor, sit amet consec
                  </Text>
                  <Text style={styles.jarakLp}>124m</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.categories}>
            <View style={styles.headerListProduct}>
              <Text style={styles.judulListProduct}>Electronics</Text>
              <Text style={styles.viewallListProduct}>View All</Text>
            </View>
            <View style={styles.coverMenuCategories}>
              <View style={styles.isiListProduct}>
                <TvIcon width={115} height={115} />
                <View style={styles.boxDescListProduct}>
                  <Text style={styles.judulLp}>Television</Text>
                  <Text style={styles.descLp}>
                    Lorem ipsum dolor, sit amet consec
                  </Text>
                  <Text style={styles.jarakLp}>124m</Text>
                </View>
              </View>
              <View style={styles.isiListProduct}>
                <McIcon width={115} height={115} />
                <View style={styles.boxDescListProduct}>
                  <Text style={styles.judulLp}>Washing Machine</Text>
                  <Text style={styles.descLp}>
                    Lorem ipsum dolor, sit amet consec
                  </Text>
                  <Text style={styles.jarakLp}>124m</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNavigation}>
        <View style={styles.isiNavigation}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Login')}>
            <View style={styles.boxIsiNavigation}>
              <HomeIcon width={22} height={22} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Login')}>
            <View style={styles.boxIsiNavigation}>
              <PurseIcon width={22} height={22} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Login')}>
            <View style={styles.boxIsiNavigation}>
              <ChatIcon width={22} height={22} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Login')}>
            <View style={styles.boxIsiNavigation}>
              <UserIcon width={22} height={22} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  home: {
    flex: 1,
    padding: 25,
    paddingBottom: 105,
  },
  headerHome: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  judulHome: {
    // backgroundColor: 'red',
    marginTop: 30,
  },
  descJudulHome: {
    color: '#303030',
    fontSize: 25,
    fontWeight: '700',
  },
  descDeskripsiHome: {
    fontSize: 13,
    marginTop: 10,
    color: '#707070',
    lineHeight: 17,
  },
  searchSetting: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxInputSearch: {
    flex: 1,
    marginRight: 15,
    backgroundColor: 'transparent',
  },
  inputSearch: {
    backgroundColor: '#fff',
    elevation: 4,
    height: 50,
    borderRadius: 50,
    fontSize: 16,
    paddingHorizontal: 18,
    paddingLeft: 51,
  },
  iconSearch: {
    position: 'absolute',
    marginLeft: 18,
  },
  categories: {
    // backgroundColor: 'red',
    marginTop: 40,
  },
  judulCategories: {
    fontSize: 21,
    fontWeight: '700',
    color: '#303030',
  },
  coverMenuCategories: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  isiMenuCategories: {
    width: 65,
    // backgroundColor: 'blue',
  },
  boxIconCategoriesActive: {
    width: 65,
    height: 65,
    backgroundColor: '#2cc17d',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  boxIconCategories: {
    width: 65,
    height: 65,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  descIconCategories: {
    fontSize: 13,
    textAlign: 'center',
    color: '#707070',
    marginTop: 8,
  },
  headerListProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  judulListProduct: {
    fontSize: 19,
    color: '#303030',
    fontWeight: '700',
  },
  viewallListProduct: {
    fontSize: 15,
    color: '#707070',
  },
  isiListProduct: {
    width: 160,
    padding: 15,
    backgroundColor: '#fff',
    elevation: 2.5,
    borderRadius: 20,
    alignItems: 'center',
  },
  boxDescListProduct: {
    marginTop: 15,
    // backgroundColor: 'red',
  },
  judulLp: {
    fontSize: 16,
    fontWeight: '700',
    color: '#303030',
  },
  descLp: {
    fontSize: 13,
    lineHeight: 17,
    marginTop: 5,
    color: '#707070',
  },
  jarakLp: {
    fontSize: 13,
    marginTop: 8,
    fontWeight: '700',
    color: '#2cc17d',
  },

  // BOTTOM NAVIGATION
  bottomNavigation: {
    width: '100%',
    bottom: 25,
    position: 'absolute',
  },
  isiNavigation: {
    height: 55,
    marginHorizontal: 25,
    backgroundColor: '#2cc17d',
    borderRadius: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  boxIsiNavigation: {
    flex: 1,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
