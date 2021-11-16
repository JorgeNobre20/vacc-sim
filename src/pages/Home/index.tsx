import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FondationIcon from "react-native-vector-icons/Foundation";
import { useNavigation } from "@react-navigation/core";

import { MainWrapper } from "../../global/styles";
import {
  ContentContainer,
  Filter,
  FilterContainer,
  FilterLabel,
  FloatButton,
  FLOAT_ICON_SIZE,
  HeaderContainer
} from "./styles";

import { HeaderComponent as Header } from "./components/Header";
import { CitizenComponent } from "./components/Citizen";
import { Loading } from "../../components/Loading";

import { showErrorMessage } from "../../utils/validationMessage";

import { Citizen } from "./interfaces";
import { api } from "../../services/api";
import { colors } from "../../global/colors";

type FilterOptions = "Todos" | "1ª Dose" | "2ª Dose";

const Home = () => {
  const navigation = useNavigation();

  const [citizens, setCitizens] = useState<Citizen[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredCitizens, setFilteredCitizens] = useState<Citizen[]>([]);
  const [hasFiltered, setHasFiltered] = useState(false);

  const [filter, setFilter] = useState<FilterOptions>("Todos");

  const [selectedDose, setSelectedDose] = useState();

  function navigateToCitizenPage() {
    navigation.navigate("RegisterCitizen", {});
  }

  async function loadCitizens() {
    try {
      setLoading(true);
      const response = await api.get("/citizens");
      const citizensData = response.data as Citizen[];
      setCitizens(citizensData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("GETTING CITIZENS ERROR => ", error);
      showErrorMessage("Erro ao carregar cidadãos");
    }
  }

  function handleFilterCitizens(selectedFilter: FilterOptions) {
    let dose = 0;

    switch (selectedFilter) {
      case "1ª Dose":
        dose = 1;
        break;

      case "2ª Dose":
        dose = 2;
        break;

      case "Todos":
        dose = 0;
        break;

      default:
        dose = 0;
        break;
    }

    setFilter(selectedFilter);
    setLoading(true);

    if (dose === 0) {
      setFilteredCitizens(citizens);
    } else {
      const filteredCitizens = citizens.filter((citizen) => {
        return Number(citizen.vaccineDose) === dose;
      });
      setFilteredCitizens(filteredCitizens);
    }

    setHasFiltered(true);
    setLoading(false);
  }

  useEffect(() => {
    loadCitizens();

    const focusListener = navigation.addListener("focus", () => {
      setHasFiltered(false);
      loadCitizens();
    });

    return () => {
      focusListener();
    };
  }, []);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={colors.white}
        barStyle="dark-content"
      />
      <MainWrapper>
        <ContentContainer>
          <HeaderContainer>
            <Header />
          </HeaderContainer>
          {loading ? (
            <Loading />
          ) : (
            <>
              <FilterContainer>
                <FondationIcon
                  name="filter"
                  size={30}
                  color={colors.secondayColor}
                />
                <FilterLabel>Filtro:</FilterLabel>

                <Filter
                  defaultValue={filter}
                  onSelect={(
                    selectedIndex: String,
                    selectedOption: unknown
                  ) => {
                    const option = selectedOption as FilterOptions;
                    handleFilterCitizens(option);
                  }}
                  options={["Todos", "1ª Dose", "2ª Dose"]}
                />
              </FilterContainer>
              <ScrollView showsVerticalScrollIndicator={false}>
                {hasFiltered ? (
                  <>
                    {filteredCitizens.map((citizen) => (
                      <CitizenComponent key={citizen.id} citizen={citizen} />
                    ))}
                  </>
                ) : (
                  <>
                    {citizens.map((citizen) => (
                      <CitizenComponent key={citizen.id} citizen={citizen} />
                    ))}
                  </>
                )}
              </ScrollView>
            </>
          )}
        </ContentContainer>
      </MainWrapper>

      <FloatButton onPress={navigateToCitizenPage}>
        <MaterialIcon name="add" color={colors.white} size={FLOAT_ICON_SIZE} />
      </FloatButton>
    </>
  );
};

export { Home };
