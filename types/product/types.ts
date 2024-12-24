export type RegionCode = 'id' | 'in' | 'global';

export type Region = {
	regionCode: RegionCode;
	regionName: string;
};

export type OrderField = {
	id: string;
	name: string;
};

export type ItemCategory = {
	id: string;
	name: string;
	order: number;
	image: string;
};

export type Item = {
	id: string;
	amount: string;
	isAvailable: boolean;
	profit: string;
	price: string;
	discountedPrice: string;
	itemCategory: string;
	tag: string;
	discount: string;
	itemImage: string;
};

export type ProductResponse = {
	id: string;
	heading: string;
	region: Region;
	orderFields: OrderField[];
	headingDescription: string;
	slug: string;
	productLogo: string;
	productCoverImage: string;
	productCategory: string;
	itemCategories: ItemCategory[];
	itemsList: Item[];
};
