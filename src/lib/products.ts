export interface Product {
    id: string
    price: number
    translations: {
        en: {
            name: string
            description: string
        }
        vn: {
            name: string
            description: string
        }
    }
}

export const products: Product[] = [
    {
        id: 'special-noodle-soup',
        price: 50000,
        translations: {
            en: {
                name: 'Beef and chicken noodle soup',
                description: 'Special noodle soup with both beef and chicken',
            },
            vn: {
                name: 'Phở bò gà',
                description: 'Phở với thịt bò và thịt gà',
            },
        },
    },
    {
        id: 'beef-noodle-soup',
        price: 40000,
        translations: {
            en: {
                name: 'Beef noodle soup',
                description: 'Traditional Vietnamese beef noodle soup with herbs',
            },
            vn: {
                name: 'Phở bò',
                description: 'Phở bò truyền thống kèm rau thơm',
            },
        },
    },
    {
        id: 'chicken-noodle-soup',
        price: 40000,
        translations: {
            en: {
                name: 'Chicken noodle soup',
                description: 'Vietnamese noodle soup with tender chicken',
            },
            vn: {
                name: 'Phở gà',
                description: 'Phở với thịt gà',
            },
        },
    },
    {
        id: 'egg-rib-rice',
        price: 50000,
        translations: {
            en: {
                name: 'Egg and rib rice',
                description: 'Steamed rice served with tender pork ribs and fried egg',
            },
            vn: {
                name: 'Cơm sườn trứng',
                description: 'Cơm trắng kèm sườn heo rim và trứng ốp la',
            },
        },
    },
    {
        id: 'chicken-rice-small',
        price: 65000,
        translations: {
            en: {
                name: 'Chicken rice (small)',
                description: 'Small portion of chicken rice',
            },
            vn: {
                name: 'Cơm gà (nhỏ)',
                description: 'Phần cơm gà nhỏ',
            },
        },
    },
    {
        id: 'chicken-rice-big',
        price: 75000,
        translations: {
            en: {
                name: 'Chicken rice (big)',
                description: 'Big portion of chicken rice',
            },
            vn: {
                name: 'Cơm gà (lớn)',
                description: 'Phần cơm gà lớn',
            },
        },
    },
    {
        id: 'fried-rice',
        price: 60000,
        translations: {
            en: {
                name: 'Fried rice',
                description: 'Wok-fried rice with vegetables and your choice of protein',
            },
            vn: {
                name: 'Cơm Chiên',
                description: 'Cơm chiên với rau củ và lựa chọn protein',
            },
        },
    },
    {
        id: 'beef-stir-fried-noodle-small',
        price: 70000,
        translations: {
            en: {
                name: 'Beef stir fried noodle (small)',
                description: 'Small portion of beef stir fried noodle',
            },
            vn: {
                name: 'Mì xào bò (nhỏ)',
                description: 'Phần mì xào bò nhỏ',
            },
        },
    },
    {
        id: 'beef-stir-fried-noodle-big',
        price: 85000,
        translations: {
            en: {
                name: 'Beef stir fried noodle (big)',
                description: 'Big portion of beef stir fried noodle',
            },
            vn: {
                name: 'Mì xào bò (lớn)',
                description: 'Phần mì xào bò lớn',
            },
        },
    },
    {
        id: 'stir-fried-spinach',
        price: 50000,
        translations: {
            en: {
                name: 'Stir fried spinach with garlic',
                description: 'Fresh morning glory stir-fried with garlic',
            },
            vn: {
                name: 'Rau Muống Xào Tỏi',
                description: 'Rau muống xào tỏi',
            },
        },
    },
    {
        id: 'coca-cola',
        price: 15000,
        translations: {
            en: {
                name: 'Coca Cola',
                description: 'Classic Coca Cola',
            },
            vn: {
                name: 'Coca Cola',
                description: 'Coca Cola cổ điển',
            },
        },
    },
    {
        id: 'pepsi',
        price: 15000,
        translations: {
            en: {
                name: 'Pepsi',
                description: 'Classic Pepsi',
            },
            vn: {
                name: 'Pepsi',
                description: 'Pepsi cổ điển',
            },
        },
    },
    {
        id: 'pepsi-zero',
        price: 15000,
        translations: {
            en: {
                name: 'Pepsi Zero',
                description: 'Sugar-free Pepsi',
            },
            vn: {
                name: 'Pepsi Zero',
                description: 'Pepsi không đường',
            },
        },
    },
    {
        id: '7up',
        price: 15000,
        translations: {
            en: {
                name: '7Up',
                description: 'Lemon-lime flavored soft drink',
            },
            vn: {
                name: '7Up',
                description: 'Nước ngọt có ga vị chanh',
            },
        },
    },
    {
        id: 'coca-cola-zero',
        price: 15000,
        translations: {
            en: {
                name: 'Coca Cola Zero',
                description: 'Sugar-free Coca Cola',
            },
            vn: {
                name: 'Coca Cola Zero',
                description: 'Coca Cola không đường',
            },
        },
    },
    {
        id: 'sting-gold',
        price: 15000,
        translations: {
            en: {
                name: 'Sting Gold Rush',
                description: 'Energy drink with golden apple flavor',
            },
            vn: {
                name: 'Sting Hương Táo',
                description: 'Nước tăng lực hương táo',
            },
        },
    },
    {
        id: 'sting-red',
        price: 15000,
        translations: {
            en: {
                name: 'Sting Red Ginseng',
                description: 'Energy drink with red ginseng',
            },
            vn: {
                name: 'Sting Dâu',
                description: 'Nước tăng lực hương dâu',
            },
        },
    },
    {
        id: 'redbull',
        price: 20000,
        translations: {
            en: {
                name: 'RedBull Krating Daeng',
                description: 'Thai energy drink',
            },
            vn: {
                name: 'RedBull Krating Daeng',
                description: 'Nước tăng lực Thái',
            },
        },
    },
    {
        id: 'coffee',
        price: 20000,
        translations: {
            en: {
                name: 'Coffee',
                description: 'Vietnamese coffee',
            },
            vn: {
                name: 'Cà phê',
                description: 'Cà phê Việt Nam',
            },
        },
    },
    {
        id: 'larue',
        price: 20000,
        translations: {
            en: {
                name: 'Beer Larue Smooth',
                description: 'Vietnamese smooth beer',
            },
            vn: {
                name: 'Bia Larue',
                description: 'Bia Việt Nam',
            },
        },
    },
    {
        id: 'tiger-crystal',
        price: 25000,
        translations: {
            en: {
                name: 'Tiger Crystal',
                description: 'Crystal clear beer',
            },
            vn: {
                name: 'Bia Tiger Crystal',
                description: 'Bia trong suốt',
            },
        },
    },
    {
        id: 'saigon-beer',
        price: 20000,
        translations: {
            en: {
                name: 'Saigon Beer',
                description: 'Traditional Vietnamese beer',
            },
            vn: {
                name: 'Bia Sài Gòn',
                description: 'Bia truyền thống Việt Nam',
            },
        },
    },
    {
        id: 'coconut',
        price: 25000,
        translations: {
            en: {
                name: 'Coconut',
                description: 'Fresh coconut water',
            },
            vn: {
                name: 'Dừa tươi',
                description: 'Nước dừa tươi',
            },
        },
    },
    {
        id: 'water',
        price: 10000,
        translations: {
            en: {
                name: 'Water',
                description: 'Purified water',
            },
            vn: {
                name: 'Nước',
                description: 'Nước tinh khiết',
            },
        },
    },
    {
        id: 'sugarcane',
        price: 15000,
        translations: {
            en: {
                name: 'Sugarcane Juice',
                description: 'Fresh squeezed sugarcane juice',
            },
            vn: {
                name: 'Nước mía',
                description: 'Nước mía tươi',
            },
        },
    },
    {
        id: 'orange-juice',
        price: 20000,
        translations: {
            en: {
                name: 'Orange Juice',
                description: 'Fresh orange juice',
            },
            vn: {
                name: 'Nước cam',
                description: 'Nước cam tươi',
            },
        },
    },
    {
        id: 'soju-jinro',
        price: 100000,
        translations: {
            en: {
                name: 'Soju Jinro Chamisul',
                description: 'Korean rice wine',
            },
            vn: {
                name: 'Rượu Soju Jinro Chamisul',
                description: 'Rượu gạo Hàn Quốc',
            },
        },
    },
    {
        id: 'nep-moi',
        price: 100000,
        translations: {
            en: {
                name: 'Nep Moi Wine',
                description: 'Vietnamese rice wine',
            },
            vn: {
                name: 'Rượu Nếp Mới',
                description: 'Rượu gạo Việt Nam',
            },
        },
    },
    {
        id: 'mens-vodka',
        price: 100000,
        translations: {
            en: {
                name: "Men's Vodka",
                description: 'Vietnamese vodka',
            },
            vn: {
                name: 'Rượu Vodka Men',
                description: 'Rượu vodka Việt Nam',
            },
        },
    },
]
