/* Used as starting data for ShopPage */
const SHOP_DATA = [
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          // imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
          imageUrl: "/images/shop-img/hats/brown-brim.png",
          price: 25,
          newCollection: false,
          onSale: true
          
        },
        {
          id: 2,
          name: 'Blue Beanie',
          // imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
          imageUrl: "/images/shop-img/hats/blue-beanie.png",
          price: 18,
          newCollection: true,
          onSale: false
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          // imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
          imageUrl: "/images/shop-img/hats/brown-cowboy.png",
          price: 35,
          newCollection: true,
          onSale: true
        },
        {
          id: 4,
          name: 'Grey Brim',
          // imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
          imageUrl: "/images/shop-img/hats/grey-brim.png",
          price: 25,
          newCollection: false,
          onSale: true
        },
        {
          id: 5,
          name: 'Green Beanie',
          // imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          imageUrl: "/images/shop-img/hats/green-beanie.png",
          price: 18,
          newCollection: true,
          onSale: false
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          // imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          imageUrl: "/images/shop-img/hats/palm-tree-cap.png",
          price: 14,
          newCollection: false,
          onSale: true
        },
        {
          id: 7,
          name: 'Red Beanie',
          // imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          imageUrl: "/images/shop-img/hats/red-beanie.png",
          price: 18,
          newCollection: false,
          onSale: false
        },
        {
          id: 8,
          name: 'Wolf Cap',
          // imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          imageUrl: "/images/shop-img/hats/wolf-cap.png",
          price: 14,
          newCollection: true,
          onSale: false
        },
        {
          id: 9,
          name: 'Blue Snapback',
          // imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          imageUrl: "/images/shop-img/hats/blue-snapback.png",
          price: 16,
          newCollection: false,
          onSale: true
        }
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          // imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          imageUrl: "/images/shop-img/sneakers/adidas-nmd.png", 
          price: 220,
          newCollection: true,
          onSale: false
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          // imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          imageUrl: "/images/shop-img/sneakers/yeezy.png",
          price: 280,
          newCollection: false,
          onSale: false
        },
        {
          id: 12,
          name: 'Black Converse',
          // imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          imageUrl: "/images/shop-img/sneakers/black-converse.png",
          price: 110,
          newCollection: false,
          onSale: true
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          // imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          imageUrl: "/images/shop-img/sneakers/white-nike-high-tops.png",
          price: 160,
          newCollection: false,
          onSale: false
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          // imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          imageUrl: "/images/shop-img/sneakers/nikes-red.png",
          price: 160,
          newCollection: true,
          onSale: false
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          // imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          imageUrl: "/images/shop-img/sneakers/nike-brown.png",
          price: 160,
          newCollection: false,
          onSale: false
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          // imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          imageUrl: "/images/shop-img/sneakers/nike-funky.png",
          price: 190,
          newCollection: true,
          onSale: false
        },
        {
          id: 17,
          name: 'Timberlands',
          // imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          imageUrl: "/images/shop-img/sneakers/timberlands.png",
          price: 200,
          newCollection: false,
          onSale: true
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          // imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          imageUrl: "/images/shop-img/jackets/black-shearling.png",
          price: 125,
          newCollection: false,
          onSale: false
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          // imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          imageUrl: "/images/shop-img/jackets/blue-jean-jacket.png",
          price: 90,
          newCollection: true,
          onSale: false
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          // imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          imageUrl: "/images/shop-img/jackets/grey-jean-jacket.png",
          price: 90,
          newCollection: false,
          onSale: true
        },
        {
          id: 21,
          name: 'Brown Shearling',
          // imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          imageUrl: "/images/shop-img/jackets/brown-shearling.png",
          price: 165,
          newCollection: false,
          onSale: false
        },
        {
          id: 22,
          name: 'Tan Trench',
          // imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          imageUrl: "/images/shop-img/jackets/brown-trench.png",
          price: 185,
          newCollection: false,
          onSale: false
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          // imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          imageUrl: "/images/shop-img/womens/blue-tank.png",
          price: 25,
          newCollection: false,
          onSale: false
        },
        {
          id: 24,
          name: 'Floral Blouse',
          // imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          imageUrl: "/images/shop-img/womens/floral-blouse.png",
          price: 20,
          newCollection: true,
          onSale: true
        },
        {
          id: 25,
          name: 'Floral Dress',
          // imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          imageUrl: "/images/shop-img/womens/floral-skirt.png",
          price: 80,
          newCollection: false,
          onSale: false
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          // imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          imageUrl: "/images/shop-img/womens/red-polka-dot-dress.png",
          price: 80,
          newCollection: false,
          onSale: false
        },
        {
          id: 27,
          name: 'Striped Sweater',
          // imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          imageUrl: "/images/shop-img/womens/striped-sweater.png",
          price: 45,
          newCollection: true,
          onSale: true
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          // imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          imageUrl: "/images/shop-img/womens/yellow-track-suit.png",
          price: 135,
          newCollection: false,
          onSale: false
        },
        {
          id: 29,
          name: 'White Blouse',
          // imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          imageUrl: "/images/shop-img/womens/white-vest.png",
          price: 20,
          newCollection: false,
          onSale: false
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 30,
          name: 'Camo Down Vest',
          // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          imageUrl: "/images/shop-img/mens/camo-vest.png",
          price: 325,
          newCollection: false,
          onSale: false
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          // imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          imageUrl: "/images/shop-img/mens/floral-shirt.png",
          price: 20,
          newCollection: false,
          onSale: true
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          // imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          imageUrl: "/images/shop-img/mens/long-sleeve.png",
          price: 25,
          newCollection: true,
          onSale: false
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          // imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          imageUrl: "/images/shop-img/mens/pink-shirt.png",
          price: 25,
          newCollection: false,
          onSale: false
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          // imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          imageUrl: "/images/shop-img/mens/roll-up-jean-shirt.png",
          price: 40,
          newCollection: false,
          onSale: true
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          // imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          imageUrl: "/images/shop-img/mens/polka-dot-shirt.png",
          price: 25,
          newCollection: true,
          onSale: false
        }
      ]
    },
    {
      id: 6,
      title: 'Kids',
      routeName: 'kids',
      items: [
        {
          id: 36,
          name: 'Bleeding Edge',
          imageUrl: "/images/shop-img/kids/bleeding-edge.png",
          price: 14,
          newCollection: true,
          onSale: true
        },
        {
          id: 37,
          name: 'Bleeding Heart',
          imageUrl: "/images/shop-img/kids/bleeding-heart.png",
          price: 22,
          newCollection: true,
          onSale: false
        },
        {
          id: 38,
          name: 'Fuschia Pink',
          imageUrl: "/images/shop-img/kids/fuschia-pink.png",
          price: 17,
          newCollection: false,
          onSale: true
        },
        {
          id: 39,
          name: 'Morning Glory',
          imageUrl: "/images/shop-img/kids/morning-glory.png",
          price: 22,
          newCollection: false,
          onSale: false
        },
        {
          id: 40,
          name: 'Pandan Breeze',
          imageUrl: "/images/shop-img/kids/pandan-breeze.png",
          price: 22,
          newCollection: true,
          onSale: false
        },
        {
          id: 41,
          name: 'Sunshine Pearl',
          imageUrl: "/images/shop-img/kids/sunshine-pearl.png",
          price: 20,
          newCollection: false,
          onSale: true
        },
        {
          id: 42,
          name: 'Thunder Blue',
          imageUrl: "/images/shop-img/kids/thunder-blue.png",
          price: 20,
          newCollection: true,
          onSale: false
        },
        {
          id: 43,
          name: 'White Blizzard',
          imageUrl: "/images/shop-img/kids/white-blizzard.png",
          price: 25,
          newCollection: false,
          onSale: true
        },
        {
          id: 44,
          name: 'Winter Beanie',
          imageUrl: "/images/shop-img/kids/winter-beanie.png",
          price: 25,
          newCollection: false,
          onSale: false
        },
        {
          id: 45,
          name: 'Winter Bee',
          imageUrl: "/images/shop-img/kids/winter-bee.png",
          price: 20,
          newCollection: true,
          onSale: false
        },
      ]
    },
    {
      id: 7,
      title: 'Sandals',
      routeName: 'sandals',
      items: [
        {
          id: 46,
          name: 'Havanah Brown',
          imageUrl: "/images/shop-img/sandals/havanah-brown.png",
          price: 35,
          newCollection: false,
          onSale: false
        },
        {
          id: 47,
          name: 'Kusharta Rage',
          imageUrl: "/images/shop-img/sandals/kusharta-rage.png",
          price: 35,
          newCollection: false,
          onSale: false
        },
        {
          id: 48,
          name: 'Leaf Green',
          imageUrl: "/images/shop-img/sandals/leaf-green.png",
          price: 30,
          newCollection: true,
          onSale: true
        },
        {
          id: 49,
          name: 'Powder Blue',
          imageUrl: "/images/shop-img/sandals/powder-blue.png",
          price: 30,
          newCollection: false,
          onSale: false
        },
        {
          id: 50,
          name: 'Shard Wave',
          imageUrl: "/images/shop-img/sandals/shard-wave.png",
          price: 35,
          newCollection: true,
          onSale: false
        },
        {
          id: 51,
          name: 'Sky Blue',
          imageUrl: "/images/shop-img/sandals/sky-blue.png",
          price: 25,
          newCollection: false,
          onSale: true
        },
        {
          id: 52,
          name: 'Yokowa Breeze',
          imageUrl: "/images/shop-img/sandals/yokawa-breeze.png",
          price: 25,
          newCollection: true,
          onSale: false
        },
      ]
    },
    {
      id: 8,
      title: 'Elders',
      routeName: 'elders',
      items: [
        {
          id: 53,
          name: 'Austin Breeze T-shirt',
          imageUrl: "/images/shop-img/elders/austin-breeze.png",
          price: 25,
          newCollection: false,
          onSale: false
        },
        {
          id: 54,
          name: 'Bradford Zhak Polo',
          imageUrl: "/images/shop-img/elders/bradford-zhak.png",
          price: 34,
          newCollection: true,
          onSale: false
        },
        {
          id: 55,
          name: 'Casual Havanah',
          imageUrl: "/images/shop-img/elders/casual-havanah.png",
          price: 40,
          newCollection: false,
          onSale: false
        },
        {
          id: 56,
          name: 'Casual Retro',
          imageUrl: "/images/shop-img/elders/casual-retro.png",
          price: 25,
          newCollection: false,
          onSale: true
        },
        {
          id: 57,
          name: 'Dark Winter',
          imageUrl: "/images/shop-img/elders/dark-winter.png",
          price: 35,
          newCollection: false,
          onSale: false
        },
        {
          id: 58,
          name: 'Motor Davis Polo',
          imageUrl: "/images/shop-img/elders/motor-davis.png",
          price: 30,
          newCollection: true,
          onSale: false
        },
        {
          id: 59,
          name: 'Spring Breeze',
          imageUrl: "/images/shop-img/elders/spring-breeze.png",
          price: 30,
          newCollection: false,
          onSale: true
        },
      ]
    }
  ];
  
  export default SHOP_DATA;
  