import HeroSlide from "./HeroSlide";
import HeroDots from "./HeroDots";
import useAutoSlider from "./useAutoSlider";
import useFetch from "./useFetch";
import styles from "./HeroSection.module.css";

export default function HeroSlider() {
  const { data: heroBanners } = useFetch("/api/hero-banners");
  const { active, setActive } = useAutoSlider(heroBanners.length, 4000);

  return (
    <div className={styles["hero-left"]}>
      {heroBanners.map((banner, index) => (
        <HeroSlide
          key={banner.id}
          banner={banner}
          isActive={index === active}
          priority={index === 0}
        />
      ))}

      <HeroDots
        count={heroBanners.length}
        active={active}
        onChange={setActive}
      />
    </div>
  );
}
