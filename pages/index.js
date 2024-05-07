import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Carousel from './carousel';

export default function Home() {
  let imageList = [
    {
        Title: "Avatar",
        Year: "2009",
        Rated: "PG-13",
        src: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
    },
    {
        Title: "Avatar1",
        Year: "2009",
        Rated: "PG-13",
        src: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
    },
    {
        Title: "Avatar2",
        Year: "2009",
        Rated: "PG-13",
        src: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
    },
    {
        Title: "Avatar3",
        Year: "2009",
        Rated: "PG-13",
        src: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
    },
    {
        Title: "Avatar4",
        Year: "2009",
        Rated: "PG-13",
        src: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
    },
    {
        Title: "I Am Legend",
        Year: "2007",
        Rated: "PG-13",
        src: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
    },
    {
        Title: "I Am Legend2",
        Year: "2007",
        Rated: "PG-13",
        src: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
    },
    {
        Title: "I Am Legend3",
        Year: "2007",
        Rated: "PG-13",
        src: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
    },
    {
        Title: "300",
        Year: "2006",
        Rated: "R",
        src: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg"
    },
    {
        Title: "3001",
        Year: "2006",
        Rated: "R",
        src: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
    },

]
  return (
    <div className={styles.container}>
      <Head>
        <title>Carousel Section</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <div className={styles.carouselContainer}>
        <Carousel imageList= {imageList}/>
        </div>
    </div>
  );
}
