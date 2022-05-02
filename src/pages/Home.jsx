import HeroImage from "../components/Home/HeroImage";
import Categories from "../components/Home/Categories";
import ArticlesCarousel from "../components/Home/ArticlesCarousel";
import { Divider } from 'primereact/divider';

export default function Home() {
  return (
    <>
      <HeroImage />
      <Categories />
      <ArticlesCarousel />
    </>
  );
}
