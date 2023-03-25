import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FlatInfoData from './cards/HomeFlatInfo';
import FlatInfoDataLeads from './cards/HomeLeads';
const Home = () => {
  const flatdetailsInfo = ({item}) => {




    return (
      <View style={styles.FlatinfoCarda}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                fontWeight: '500',
                paddingVertical: 3,
              }}>
              {item.TotalNumber}
            </Text>
            <Text>{item.Total}</Text>
          </View>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            }}
            style={{height: 50, width: 50}}
          />
        </View>
        <TouchableOpacity style={{marginTop: 20}}>
          <Text style={{fontSize: 16, color: '#1089FF', fontWeight: '500'}}>
            {item.Button}
          </Text>
        </TouchableOpacity>
      </View>
    );
  
  };
  const flatdetailsInfoLeaads = ({item}) => {
    return (
      <View style={[styles.FlatinfoCarda,{borderWidth:.5}]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
          <Image
            source={{
              uri: item.imageURL
            }}
            style={{height: 50, width: 50}}
          />
           
            <Text style={{fontSize:17,color:'black',paddingVertical:10}}>{item.CardTitle}</Text>
          </View>
        
        </View>
       
        <Text
              style={{
                fontSize: 20,
                color: 'black',
                fontWeight: '500',
                paddingVertical: 3,
              }}>
                
              {item.TotalNumber}
            </Text>
       
      </View>
    )}






  return (
    <View style={styles.Container}>
      <StatusBar hidden={true} />
      <View style={styles.Header}>
        <View>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0',
              }}
              style={{height: 40, width: 40, borderRadius: 50}}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <FontAwesome name="gear" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.HeaderFilter}>
          <View
            style={{
              paddingHorizontal: 20,
              borderWidth: 0.3,
              width: '90%',
              padding: 8,
              borderRadius: 6,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Text>Filtered by</Text>

              <Text style={{color: 'black', fontSize: 16}}>Last 30 Days</Text>
            </View>
            <FontAwesome name="angle-down" color="black" size={20} />
          </View>
        </View>
        <View style={styles.FlatInfo}>
          <FlatList
            data={FlatInfoData}
            renderItem={flatdetailsInfo}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.CustomersSection}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
            Customers
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                borderWidth: 0.3,
                borderColor: 'black',
                padding: 15,
                width: '45%',
                marginVertical: 20,
                borderRadius: 7,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 23,
                  fontWeight: '500',
                  marginVertical: 6,
                }}>
                3,490
              </Text>
              <Text style={{fontSize: 16}}>All Customers</Text>
            </View>
            <View
              style={{
                borderWidth: 0.3,
                padding: 15,
                width: '45%',
                marginVertical: 20,
                borderRadius: 7,
              }}>
              <Text
                style={{
                  color: '#14B95E',
                  fontSize: 23,
                  fontWeight: '500',
                  marginVertical: 6,
                }}>
                890
              </Text>
              <Text style={{fontSize: 16}}>Active Customers</Text>
            </View>
          </View>
          <View style={styles.ExportList}>
            <TouchableOpacity
              style={{
                borderWidth: 0.3,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 10,
                width: width - 30,
                borderRadius: 7,
              }}>
              <Text
                style={{fontSize: 17, color: 'black', paddingHorizontal: 10}}>
                Export list
              </Text>
              <Ionicons name="cloud-download-outline" color="black" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        {/*  */}
        <View style={styles.Leads}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
              paddingVertical: 10,
            }}>
            Leads
          </Text>
          <View style={styles.LeadsFields}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '500',
                  color: 'black',
                }}>
                35,698
              </Text>
              <Text style={{fontSize: 15}}>All leads</Text>
            </View>
            <Text
              style={{
                color: '#1089FF',
                fontWeight: 'bold',
                paddingHorizontal: 10,
              }}>
             ALL LEADS
            </Text>
          </View>

          <View style={styles.LeadsFields}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '500',
                  color: 'red',
                }}>
                35,698
              </Text>
              <Text style={{fontSize: 15}}>All leads</Text>
            </View>
            <Text
              style={{
                color: '#1089FF',
                fontWeight: 'bold',
                paddingHorizontal: 10,
              }}>
              ALL LEADS
            </Text>
          </View>

          <View style={styles.LeadsFields}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '500',
                  color: '#00C564',
                }}>
                35,698
              </Text>
              <Text style={{fontSize: 15}}>All leads</Text>
            </View>
            <Text
              style={{
                color: '#1089FF',
                fontWeight: 'bold',
                paddingHorizontal: 10,
              }}>
              ALL LEADS
            </Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.FlatInfoLeads}>
          <Text  style={{
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
              paddingVertical: 10,
            }}>Leads By Channel</Text>
          <FlatList
            data={FlatInfoDataLeads}
            renderItem={flatdetailsInfoLeaads}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/*  */}
        <View style={styles.Leads}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
              paddingVertical: 10,
            }}>
           Trending Leads
          </Text>
          <View style={styles.LeadsFields}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '500',
                  color: 'black',
                }}>
                35,698
              </Text>
              <Text style={{fontSize: 15}}>All leads</Text>
            </View>
            <Text
              style={{
                color: '#FACA6D',
                fontWeight: 'bold',
                paddingHorizontal: 10,
                fontSize:19
              }}>
              #01
            </Text>
          </View>

          <View style={styles.LeadsFields}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '500',
                  color: 'black',
                }}>
                35,698
              </Text>
              <Text style={{fontSize: 15}}>All leads</Text>
            </View>
            <Text
              style={{
                color: '#FACA6D',
                fontWeight: 'bold',
                paddingHorizontal: 10,
                fontSize:19
              }}>
              #02
            </Text>
          </View>

          <View style={styles.LeadsFields}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '500',
                  color: 'black',
                }}>
                35,698
              </Text>
              <Text style={{fontSize: 15}}>All leads</Text>
            </View>
            <Text
              style={{
                color: '#FACA6D',
                fontWeight: 'bold',
                paddingHorizontal: 10,
                fontSize:19
              }}>
              #03
            </Text>
          </View>

          <View style={styles.LeadsFields}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '500',
                  color: 'black',
                }}>
                35,698
              </Text>
              <Text style={{fontSize: 15}}>All leads</Text>
            </View>
            <Text
              style={{
                color: '#FACA6D',
                fontWeight: 'bold',
                paddingHorizontal: 10,
                fontSize:19
              }}>
              #04
            </Text>
          </View>

          <View style={styles.LeadsFields}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '500',
                  color: 'black',
                }}>
                35,698
              </Text>
              <Text style={{fontSize: 15}}>All leads</Text>
            </View>
            <Text
              style={{
                color: '#FACA6D',
                fontWeight: 'bold',
                paddingHorizontal: 10,
                fontSize:19
              }}>
              #05
            </Text>
          </View>
        </View>
        <View style={styles.Heroes}>
         <Text style={{fontSize:19,color:'black',fontWeight:'bold',paddingVertical:10}}>Heroes</Text>
         <View style={{backgroundColor:'#f2f2f2',borderRadius:10,padding:3,flexDirection:'row',justifyContent:'space-between'}}>
         <TouchableOpacity style={styles.Heroessections}><Text style={{fontSize:17,color:'black',borderRadius:1,alignItems:'center',justifyContent:'center'}}>By Conversations</Text></TouchableOpacity>
         <TouchableOpacity style={styles.Heroessections}><Text style={{fontSize:17,color:'black',borderRadius:1}}>By Leads</Text></TouchableOpacity>
    
         </View>
         <View style={styles.HeroesCard}>
            <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#FDE7EE',padding:15,borderRadius:10,marginVertical:10}}>
            <Ionicons name='chatbox-outline' size={25} color='#EA1C5E'/> 
              <Text style={{fontSize:17,color:'#EA1C5E',fontWeight:'bold'}}>Super Hero</Text>
               <Text style={{fontSize:17,color:'#EA1C5E',fontWeight:'bold'}}>#01</Text>
            </View>
           <View style={{alignItems:'center',justifyContent:'center',paddingVertical:50}}>
           <Image source={{uri:'https://media.istockphoto.com/id/1033726156/photo/attractive-and-cute-young-brunette-model-share-information-about-sale-and-discount-gossip.jpg?b=1&s=170667a&w=0&k=20&c=sHTS-rzX3-6S25UfQ7og9XCrg-yzByxEGGaStB4FjV4='}} style={{height:150,width:150,borderRadius:100}}/>
           <Text style={{fontSize:19,fontWeight:'bold',marginVertical:10,color:'black'}}>Jeremias del Pozo</Text>
           <Text style={{fontSize:16,}}>12,456 minutes</Text>
           <TouchableOpacity style={{marginTop:15}}>
            <Text style={{color:'#0C8CE9',fontWeight:'bold',fontSize:17,}}>SAY CONGRATS</Text>
           </TouchableOpacity>
           </View>
         </View>
           <View style={styles.heroesCardFields}>
            <Image source={{uri:'https://media.istockphoto.com/id/1033726156/photo/attractive-and-cute-young-brunette-model-share-information-about-sale-and-discount-gossip.jpg?b=1&s=170667a&w=0&k=20&c=sHTS-rzX3-6S25UfQ7og9XCrg-yzByxEGGaStB4FjV4='}} style={{height:60,width:60,borderRadius:100}}/>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:19,color:'black'}}>Jeremias del Pozo</Text>
              <Text style={{fontSize:16}}>8,633 minutes</Text>
            </View>
            <View style={{padding:5,backgroundColor:'#FDE7EE',borderRadius:5}}>
              <Text style={{color:'#E80F54',fontSize:15}}>#01</Text>
            </View>
           </View>
           <View style={styles.heroesCardFields}>
            <Image source={{uri:'https://media.istockphoto.com/id/1033726156/photo/attractive-and-cute-young-brunette-model-share-information-about-sale-and-discount-gossip.jpg?b=1&s=170667a&w=0&k=20&c=sHTS-rzX3-6S25UfQ7og9XCrg-yzByxEGGaStB4FjV4='}} style={{height:60,width:60,borderRadius:100}}/>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:19,color:'black'}}>Jeremias del Pozo</Text>
              <Text style={{fontSize:16}}>8,633 minutes</Text>
            </View>
            <View style={{padding:5,backgroundColor:'#FDE7EE',borderRadius:5}}>
              <Text style={{color:'#E80F54',fontSize:15}}>#02</Text>
            </View>
           </View>
           <View style={styles.heroesCardFields}>
            <Image source={{uri:'https://media.istockphoto.com/id/1033726156/photo/attractive-and-cute-young-brunette-model-share-information-about-sale-and-discount-gossip.jpg?b=1&s=170667a&w=0&k=20&c=sHTS-rzX3-6S25UfQ7og9XCrg-yzByxEGGaStB4FjV4='}} style={{height:60,width:60,borderRadius:100}}/>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:19,color:'black'}}>Jeremias del Pozo</Text>
              <Text style={{fontSize:16}}>8,633 minutes</Text>
            </View>
            <View style={{padding:5,backgroundColor:'#FDE7EE',borderRadius:5}}>
              <Text style={{color:'#E80F54',fontSize:15}}>#03</Text>
            </View>
           </View>
           <View style={styles.heroesCardFields}>
            <Image source={{uri:'https://media.istockphoto.com/id/1033726156/photo/attractive-and-cute-young-brunette-model-share-information-about-sale-and-discount-gossip.jpg?b=1&s=170667a&w=0&k=20&c=sHTS-rzX3-6S25UfQ7og9XCrg-yzByxEGGaStB4FjV4='}} style={{height:60,width:60,borderRadius:100}}/>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:19,color:'black'}}>Jeremias del Pozo</Text>
              <Text style={{fontSize:16}}>8,633 minutes</Text>
            </View>
            <View style={{padding:5,backgroundColor:'#FDE7EE',borderRadius:5}}>
              <Text style={{color:'#E80F54',fontSize:15}}>#04</Text>
            </View>
           </View>
           <View style={styles.heroesCardFields}>
            <Image source={{uri:'https://media.istockphoto.com/id/1033726156/photo/attractive-and-cute-young-brunette-model-share-information-about-sale-and-discount-gossip.jpg?b=1&s=170667a&w=0&k=20&c=sHTS-rzX3-6S25UfQ7og9XCrg-yzByxEGGaStB4FjV4='}} style={{height:60,width:60,borderRadius:100}}/>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:19,color:'black'}}>Jeremias del Pozo</Text>
              <Text style={{fontSize:16}}>8,633 minutes</Text>
            </View>
            <View style={{padding:5,backgroundColor:'#FDE7EE',borderRadius:5}}>
              <Text style={{color:'#E80F54',fontSize:15}}>#05</Text>
            </View>
           </View>
           <View style={{alignItems:'center',
          paddingTop:20}}>
            <TouchableOpacity>
              <Text style={{fontSize:17,fontWeight:'bold',color:'#1089FF'}}>SEE ALL AGENTS</Text>
            </TouchableOpacity>
           </View>
        </View>
        <View style={styles.FlatInfoLeads}>
          <Text  style={{
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
              paddingVertical: 10,
            }}>Leads By Channel</Text>
          <FlatList
            data={FlatInfoDataLeads}
            renderItem={flatdetailsInfoLeaads}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f2f2f2',
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
  },
  HeaderFilter: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 6,
  },
  FlatInfo: {
    marginHorizontal: 5,
  },
  FlatinfoCarda: {
    borderRadius: 7,
    borderColor: 'black',
    width: width - 150,
    padding: 20,
    backgroundColor: 'white',
    marginVertical: 2,
    marginHorizontal: 8,
  },
  CustomersSection: {
    padding: 30,
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 10,
  },
  ExportList: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 5,
  },
  Leads: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  LeadsFields: {
    borderWidth: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 7,
  },
  FlatInfoLeads:{
    backgroundColor:'white',
    padding:20,
    marginVertical:10
  },
  Heroes:{
    padding:20,
    backgroundColor:'white',
    marginVertical:10
  },
  Heroessections:{
    backgroundColor:'white',paddingVertical:20,paddingHorizontal:9,width:'48%',
    alignItems:'center',
    justifyContent:'center'

},
HeroesCard:{
borderWidth:.4,
padding:10,
borderRadius:10,
marginVertical:12
}
,
heroesCardFields:{
  flexDirection:'row',borderWidth:.5,paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',alignItems:'center',borderRadius:7,marginVertical:3
}
}
)

