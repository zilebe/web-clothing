import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: [...state.cartItems, action.payload]
			};
		default:
			return state;
	}
};

export default cartReducer;

////////////////////////////////////////////////////////////

import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item
});

////////////////////////////////////////////////////////////

const CartActionTypes = {
	TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
	ADD_ITEM: "ADD_ITEM"
};

export default CartActionTypes;

////////////////////////////////////////////////////////

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div className="image" style={{ background: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				Add to cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);

////////////////////////////////////////////////////////

import React from "react";
import CollectionItem from "../collection-item/collection-item";
import "./collection-preview.scss";

const CollectionPreview = ({ items, title }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, idx) => idx < 4)
					.map(item => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
