import { TouchableOpacity, StyleSheet, ImageSourcePropType} from "react-native";
import { Image } from "react-native";



export const MoviesCard  = (props: { moviesURL: ImageSourcePropType; }) => {
    return(
        <TouchableOpacity>
            <Image  style= {styles.img} source={props.moviesURL} ></Image>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    img: {
        marginLeft: 20
    }
})