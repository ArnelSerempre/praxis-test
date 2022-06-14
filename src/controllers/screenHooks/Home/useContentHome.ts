import { useEffect, useState } from "react";
import useApi from "api";
import { IHomeAssets } from "models/interfaces/home";

const useContentHome = () => {
  // States
  const [homeBanner, setHomeBanner] = useState<IHomeAssets | any>({});
  const [misionResponsive, setMisionResponsive] = useState<IHomeAssets | any>({});
  const [gerencialResponsive, setGerencialResponsive] = useState<IHomeAssets | any>({});
  const [banner_responsive1, setBannerResponsive1] = useState<IHomeAssets | any>({});
  const [section1, setSections1] = useState<IHomeAssets | any>({});
  const [section2, setSections2] = useState<IHomeAssets | any>({});
  const [section3, setSections3] = useState<IHomeAssets | any>({});
  const [section4, setSections4] = useState<IHomeAssets | any>({});
  const [background, setBackground] = useState<IHomeAssets | any>({});
  const [gerencialTeam, setGerencialTeam] = useState<IHomeAssets | any>({});
  const [misionVision, setMisionVision] = useState<IHomeAssets | any>({});

  // Api
  const { useActions } = useApi();
  const { dispatch, useHomeActions } = useActions();
  const { actGetHomeAssets } = useHomeActions();

  // Effects
  useEffect(() => {
    let obj: any = {};
    let obj1: any = {};
    let obj2: any = {};
    let obj3: any = {};

    dispatch(actGetHomeAssets({
      onSuccess: (data: IHomeAssets[]) => {
        // eslint-disable-next-line array-callback-return
        data && data.map((item: IHomeAssets) => {
          console.log(item)
          item.id === 1 && setHomeBanner(item);
          item.alt === "background" && setBackground(item);
          item.section === "Mision - Vision" && setMisionVision(item);
          item.section === "Gerencial Team" && setGerencialTeam(item);
          item.id === 266 && setMisionResponsive(item);
          item.id === 269 && setGerencialResponsive(item);
          item.id === 270 && setBannerResponsive1(item);
          

          if (item.id === 4) {
            obj.section = item;
          } else if (item.id === 8) {
            obj.sectionHover = item;
          }
          setSections1(obj);

          if (item.id === 5) {
            obj1.section = item;
          } else if (item.id === 9) {
            obj1.sectionHover = item;
          }
          setSections2(obj1);

          if (item.id === 6) {
            obj2.section = item;
          } else if (item.id === 10) {
            obj2.sectionHover = item;
          }
          setSections3(obj2);

          if (item.id === 7) {
            obj3.section = item;
          } else if (item.id === 11) {
            obj3.sectionHover = item;
          }
          setSections4(obj3);

        })
      },
      onError: (error: any) => console.log(error)
    }));
  }, []);

  return {
    content: {
      homeBanner,
      misionResponsive,
      gerencialResponsive,
      banner_responsive1,
      section1,
      section2,
      section3,
      section4,
      background,
      gerencialTeam,
      misionVision
    }
  };
}

export default useContentHome;