import React from 'react'
import styles from '../styles/Pizza.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Pizza({pizza, otherPizzas}) {
    return (
        <div className={styles.container}>
            <Head>

            <title>{pizza.name}</title>
            </Head>
            <div className={styles.pizzaWrapperLeft}> 
              <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage } />
           
            </div>
            <div className={styles.pizzaWrapperRight}>
                <div className={styles.pizzaInform}>
                    <p className={styles.pizzaTitle}> {pizza.name}</p>
                    <p className={styles.pizzaDescription}>{pizza.description}</p>
                    <p className={styles.pizzaPrice}>${pizza.price}</p>
                    <p className={styles.pizzaToppings}>{pizza.toppings}</p>

                </div>
                <div className={styles.otherPizzaWrapper}>
                    {otherPizzas.map(otherPizza => {
                        return(
                            <div className={styles.otherPizza} key={otherPizza.id}>
                             <Link href={"/" + otherPizza.slug}><a>
                              <img src={otherPizza.image} alt={otherPizza.name} />
                              <p>{otherPizza.name}</p>
                             </a></Link>
                            </div>
                        )
})}
                </div>
            </div>
            </div>

    )
}

export const getStaticPaths = async () => {
    const pizzas = [
        {
            id: '1',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza',
            description:'A delicous cheese pizza made with our finest tomato sause ',
            toppings: [' mozzarella cheese'],
            image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
            price: 9.99,
        },
        {
            id: '2',
            name: 'Meat Feast',
            slug: 'meat-feast',
              description:'A delicous cheese pizza made with our finest tomato sause ',
            toppings: ['ham','bacon','pepperoni','sausage'],
            image: "https://media.istockphoto.com/photos/neapolitan-pizza-on-black-background-picture-id1295797149",
            price: 15.99,
        },
        {
            id: '3',
            name: 'Supreme',
            slug: 'supreme',
              description:'A delicous cheese pizza made with our finest tomato sause ',
            toppings: [' olives','pineapple','ham','pepperoni'],
            image: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            price: 12.99,
        },
        {
            id: '4',
            name: 'Pepperoni Pizza',
            slug: 'pepperoni-pizza',
              description:'A delicous cheese pizza made with our finest tomato sause ',
            toppings: [' pepperoni'],
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80",
            price: 14.99,
        },
        {
            id: '5',
            name: 'Egg & Sausage Pizza',
            slug: 'egg-and-sausage-pizza',
              description:'A delicous cheese pizza made with our finest tomato sause ',
            toppings: [' sausage','egg'],
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            price: 13.99,
        },
        {
            id: '6',
            name: 'Smoked Sausage Pizza',
            slug: 'smoked-sausage-pizza',
              description:'A delicous cheese pizza made with our finest tomato sause ',28
            toppings: ['sausage ','tomato','olive'],
            image: "https://media.istockphoto.com/photos/freshly-baked-pizza-with-arugula-tomato-red-onion-and-mozzarella-picture-id1279000076",
            price: 10.99,
        },
    ]
    const paths = pizzas.map(pizza => ({
     params: {slug: `${pizza.slug}`}
    }));
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({params}) => {
    const pizzas = [
        {
            id: '1',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza',
              description:'A delicous cheese pizza made with our finest tomato sause ',
            toppings: [' mozzarella cheese'],
            image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
            price: 9.99,
        },
        {
            id: '2',
            name: 'Meat Feast',
            slug: 'meat-feast',
              description:'A delicous cheese pizza made with our finest tomato sause ',
            toppings: ['ham','bacon','pepperoni','sausage'],
            image: "https://media.istockphoto.com/photos/neapolitan-pizza-on-black-background-picture-id1295797149",
            price: 15.99,
        },
        {
            id: '3',
            name: 'Supreme',
            slug: 'supreme',
              description:'A delicous cheese pizza made with our finest tomato sause ',
            toppings: [' olives','pineapple','ham','pepperoni'],
            image: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            price: 12.99,
        },
        {
            id: '4',
            name: 'Pepperoni Pizza',
            slug: 'pepperoni-pizza',
              description:'A delicous cheese pizza made with our finest tomato sause ',
            toppings: [' pepperoni'],
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80",
            price: 14.99,
        },
        {
            id: '5',
            name: 'Egg & Sausage Pizza',
            slug: 'egg-and-sausage-pizza',
              description:'A delicous cheese pizza made with our finest tomato sause ',
            toppings: [' sausage','egg'],
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            price: 13.99,
        },
        {
            id: '6',
            name: 'Smoked Sausage Pizza',
            slug: 'smoked-sausage-pizza',
              description:'A delicous cheese pizza made with our finest tomato sause ',
            toppings: ['sausage ','tomato','olive'],
            image: "https://media.istockphoto.com/photos/freshly-baked-pizza-with-arugula-tomato-red-onion-and-mozzarella-picture-id1279000076",
            price: 10.99,
        },
    ]
    const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
    const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug);

    return {
        props: {
            pizza: pizza[0], 
            otherPizzas: otherPizzas.sort(() => Math.random() - Math.random()).slice(0, 3),
        }
    }
}