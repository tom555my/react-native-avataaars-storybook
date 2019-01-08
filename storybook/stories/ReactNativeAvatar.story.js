import React from "react";
import { ScrollView } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { Avatar, Piece } from "react-native-avataaars";

storiesOf("React Native Avatar", module)
	.add("Avatar", () => (
		<Avatar
			size={300}
			avatarStyle="Circle"
			topType="ShortHairShortRound"
			accessoriesType="Prescription02"
			hairColor="Black"
			facialHairType="Blank"
			clotheType="BlazerShirt"
			eyeType="Happy"
			eyebrowType="Default"
			mouthType="Default"
			skinColor="Light"
		/>
	))
	.add("Piece", () => (
		<ScrollView>
			<Piece pieceType="mouth" pieceSize="100" mouthType="Eating" />
			<Piece pieceType="eyes" pieceSize="100" eyeType="Dizzy" />
			<Piece
				pieceType="eyebrows"
				pieceSize="100"
				eyebrowType="RaisedExcited"
			/>
			<Piece
				pieceType="accessories"
				pieceSize="100"
				accessoriesType="Round"
			/>
			<Piece
				pieceType="top"
				pieceSize="100"
				topType="LongHairFro"
				hairColor="Red"
			/>
			<Piece
				pieceType="facialHair"
				pieceSize="100"
				facialHairType="BeardMajestic"
			/>
			<Piece
				pieceType="clothe"
				pieceSize="100"
				clotheType="Hoodie"
				clotheColor="Red"
			/>
			<Piece pieceType="graphics" pieceSize="100" graphicType="Skull" />
			<Piece pieceType="skin" pieceSize="100" skinColor="Brown" />
		</ScrollView>
	));
