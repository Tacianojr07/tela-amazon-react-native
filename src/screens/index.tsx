import {View, Image, TouchableOpacity,Text, FlatList, ScrollView} from 'react-native'
import { StyleSheet } from 'react-native'

import PrimeVideoLogo from "../img/prime_video.png";
import AmazonLogo from "../img/amazon_logo.png";
import MovieTheWell from "../img/movies/the_wheel_of_time.png"
import { MOVIESWATCHING } from '../utils/moviesWatching';
import { MoviesCard } from '../components/MoviesCards';
import { MOVIESCRIME } from '../utils/moviesCrimes';
import { MOVIESWATCH } from '../utils/moviesWatch';


export const Home = () => {
    return (
        <View style={styles.container}>
            <View style= {styles.header}>
                <Image source={PrimeVideoLogo}/>
                <Image style = {styles.amazonLogoImg}source={AmazonLogo}/>
            </View>

            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText} >Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText} >TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText} >Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}  >
                <TouchableOpacity style={styles.MovieImageThumbMail}>
                    <Image source={MovieTheWell}/>
                </TouchableOpacity>

            
                <Text style={styles.movieText} >Continue Watching</Text>
                <FlatList
                data={MOVIESWATCHING}
                keyExtractor={(item) => item.id}
                renderItem={({ item } ) => <MoviesCard  moviesURL={item.moviesURL} />}
                horizontal
                contentContainerStyle ={styles.contentList}
                showsHorizontalScrollIndicator={false}
                />
                <Text style={styles.movieText} >Crime Movies</Text>
                <FlatList
                data={MOVIESCRIME}
                keyExtractor={(item) => item.id}
                renderItem={({ item } ) => <MoviesCard  moviesURL={item.moviesURL} />}
                horizontal
                contentContainerStyle ={styles.contentList}
                showsHorizontalScrollIndicator={false}
                />
                <Text style={styles.movieText} > Watch in your language</Text>
                <FlatList
                data={MOVIESWATCH}
                keyExtractor={(item) => item.id}
                renderItem={({ item } ) => <MoviesCard  moviesURL={item.moviesURL} />}
                horizontal
                contentContainerStyle ={styles.contentList}
                showsHorizontalScrollIndicator={false}
                />
            </ScrollView>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232F3E',
        alignItems: 'flex-start'
    },

    header: {
        alignItems: 'center',
        width: "100%",
        paddingTop: 80,
    },

    amazonLogoImg: {
        marginTop: -32,
        marginLeft: 30
    },

    category: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-evenly',
        marginTop: 30,
        marginBottom: 15,
    }, 

    categoryText: {
        fontSize: 16,
        fontWeight: "700",
        color: '#fff'
    },

    movieText: {
        color:'#fff',
        fontSize: 18,
        fontWeight: "700",
        // marginLeft: 5,
        padding: 15
    },

    MovieImageThumbMail: {
        width: "100%",
        alignItems: "center",
        

    },
   
    contentList: {
        paddingLeft: 18,
        paddingRight: 30
        
    }
})