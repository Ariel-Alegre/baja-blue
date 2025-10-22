import React, { useState, useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Butfromn } from "@mui/material";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function FormHotelfromAirport() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    currency: "USD",
    isReturn: false,
    vehicles: "Suburban",
    passengers: "1",
    departureDate: "2025-08-05",
    departureTime: "01:01",
    returnDate: "2025-08-05",
    returnTime: "00:00",
    from: "BARCELO GRAN FARO",
    to: "(SJD) Los Cabos international Airpot",
    price: 0, // Inicializamos el precio como 0
  });

  const convertfromCurrency = (amount, currency) => {
    const exchangeRate = 20.14; // Ejemplo: 1 USD = 18.5 MXN
    if (currency === "MXN") {
      return (amount * exchangeRate).toFixed(2);
    }
    return amount.toFixed(2); // Si es USD, se deja igual
  };

  // Calcular y actualizar el precio basado en el vehículo y si es refromrno
  const calculatePrice = useCallback(() => {
    let basePrice = 0;
    const { vehicles, isReturn, currency } = formData;
    // San Jose del Cabo
    if (formData.from === "BARCELO GRAN FARO" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;
    } else if (formData.from === "BARCELO GRAN FARO" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;
    }

    //Corridor
    if (formData.from === "BREATHLESS RESORT SPA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;
    } else if (formData.from === "BREATHLESS RESORT SPA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;
    }

    //Puerfrom Los Cabos
    if (formData.from === "BAJA POINT" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;
    } else if (formData.from === "BAJA POINT" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;
    }

    //Encanfrom la Laguna
    if (
      formData.from === "BAHIA HOTEL AND BEACH CLUB" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 160 : 105;
    } else if (
      formData.from === "BAHIA HOTEL AND BEACH CLUB" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;
    }

    //Cabo San Lucas
    if (formData.from === "BUNGALOWS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;
    } else if (formData.from === "BUNGALOWS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;
    }

    //Pacific
    if (formData.from === "CABO AZUL" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;
    } else if (formData.from === "CABO AZUL" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;
    }

    //fromdos Sanfroms
    if (formData.from === "CABO fromRTUGA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;
    } else if (formData.from === "CABO fromRTUGA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;
    }
    //Los Barriles
    if (formData.from === "CABO BELLO RESIDENTIAL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;
    } else if (formData.from === "CABO BELLO RESIDENTIAL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;
    }

    //La Paz
    if (
      formData.from === "CABO DEL SOL RESIDENTIAL AREA" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 160 : 105;
    } else if (
      formData.from === "CABO DEL SOL RESIDENTIAL AREA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;
    }
    //Diamante
    if (formData.from === "CABO PEDREGAL HOTEL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;
    } else if (formData.from === "CABO PEDREGAL HOTEL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;
    }
    //San Jose del Cabo - fromurist Corridor

    if (formData.from === "CABO SAN LUCAS INN" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "CABO SAN LUCAS INN" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //San Jose del Cabo - Cabo San Lucas

    if (formData.from === "CABO SURF" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "CABO SURF" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }

    //San Jose del Cabo - Pacific

    if (
      formData.from === "CABO VILLAS (CORAZON CABO RESORT SPA)" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 160 : 105;

    } else if (
      formData.from === "CABO VILLAS (CORAZON CABO RESORT SPA)" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;

    }

    //San Jose del Cabo - Puerfrom Los Cabos

    if (
      formData.from === "CASA DORADA AT MEDANO BEACH" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 160 : 105;

    } else if (
      formData.from === "CASA DORADA AT MEDANO BEACH" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;

    }

    //San Jose del Cabo - Los Barriles

    if (formData.from === "CASA NATALIA" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "CASA NATALIA" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    //CASA PABLIfrom

    if (formData.from === "CASA PABLIfrom" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "CASA PABLIfrom" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //CASA RAFAEL

    if (formData.from === "CASA RAFAEL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "CASA RAFAEL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    if (formData.from === "CASCADAS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "CASCADAS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //CHILENO BAY

    if (formData.from === "CHILENO BAY" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "CHILENO BAY" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }

    //CLUB LA COSTA

    if (formData.from === "CLUB LA COSTA" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "CLUB LA COSTA" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    //CLUB REGINA

    if (formData.from === "CLUB REGINA" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "CLUB REGINA" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //COMFORT INN

    if (formData.from === "COMFORT INN" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "COMFORT INN" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //CORAL BAJA

    if (formData.from === "CORAL BAJA" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "CORAL BAJA" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }

    //DIAMANTE

    if (formData.from === "DIAMANTE" && vehicles === "Suburban") {
      basePrice = isReturn ? 180 : 115;

    } else if (formData.from === "DIAMANTE" && vehicles === "VAN") {
      basePrice = isReturn ? 200 : 135;

    }

    //DREAMS

    if (formData.from === "DREAMS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "DREAMS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //EL AMEYAL

    if (formData.from === "EL AMEYAL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "EL AMEYAL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //PUEBLO BONIfrom PACIFICA

    if (formData.from === "PUEBLO BONIfrom PACIFICA" && vehicles === "Suburban") {
      basePrice = isReturn ? 180 : 115;

    } else if (formData.from === "PUEBLO BONIfrom PACIFICA" && vehicles === "VAN") {
      basePrice = isReturn ? 200 : 135;

    }

    //PUEBLO BONIfrom ROSE

    if (formData.from === "PUEBLO BONIfrom ROSE" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "PUEBLO BONIfrom ROSE" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //PUEBLO BONIfrom SUNSET BEACH

    if (
      formData.from === "PUEBLO BONIfrom SUNSET BEACH" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 180 : 115;

    } else if (
      formData.from === "PUEBLO BONIfrom SUNSET BEACH" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 200 : 135;

    }

    //PUERfrom LOS CABOS RESIDENTIAL AREA

    if (
      formData.from === "PUERfrom LOS CABOS RESIDENTIAL AREA" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 140 : 95;

    } else if (
      formData.from === "PUERfrom LOS CABOS RESIDENTIAL AREA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 160 : 115;

    }

    //QUINTA DEL SOL

    if (formData.from === "QUINTA DEL SOL" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "QUINTA DEL SOL" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //QUERENCIA RESIDENTIAL AREA

    if (
      formData.from === "QUERENCIA RESIDENTIAL AREA" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 140 : 95;

    } else if (
      formData.from === "QUERENCIA RESIDENTIAL AREA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 160 : 115;

    }

    //QUIVIRA RESIDENTIAL

    if (formData.from === "QUIVIRA RESIDENTIAL" && vehicles === "Suburban") {
      basePrice = isReturn ? 180 : 115;

    } else if (formData.from === "QUIVIRA RESIDENTIAL" && vehicles === "VAN") {
      basePrice = isReturn ? 200 : 135;

    }

    //RITZ ZADUN

    if (formData.from === "RITZ ZADUN" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "RITZ ZADUN" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //RIU BAJA (ALL ADULTS RESORT)

    if (
      formData.from === "RIU BAJA (ALL ADULTS RESORT)" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 160 : 105;

    } else if (
      formData.from === "RIU BAJA (ALL ADULTS RESORT)" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;

    }

    //RIU PALACE

    if (formData.from === "RIU PALACE" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "RIU PALACE" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //RIU SANTA FE

    if (formData.from === "RIU SANTA FE" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "RIU SANTA FE" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //ROYAL DE CAMERON

    if (formData.from === "ROYAL DE CAMERON" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "ROYAL DE CAMERON" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    //ROYAL PARK

    if (formData.from === "ROYAL PARK" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "ROYAL PARK" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    //ROYAL SOLARIS

    if (formData.from === "ROYAL SOLARIS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "ROYAL SOLARIS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }

    //SANDOS FINISTERRA

    if (formData.from === "SANDOS FINISTERRA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "SANDOS FINISTERRA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //SAMPAGUITA

    if (formData.from === "SAMPAGUITA" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "SAMPAGUITA" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }

    //SECRETS PUERfrom LOS CABOS

    if (formData.from === "SECRETS PUERfrom LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (
      formData.from === "SECRETS PUERfrom LOS CABOS" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 160 : 115;

    }

    //SEVEN CROWN

    if (formData.from === "SEVEN CROWN" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "SEVEN CROWN" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //SHERAfromN HOTEL

    if (formData.from === "SHERAfromN HOTEL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "SHERAfromN HOTEL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //SIESTA SUITES

    if (formData.from === "SIESTA SUITES" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "SIESTA SUITES" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //SIRENA DEL MAR

    if (formData.from === "SIRENA DEL MAR" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "SIRENA DEL MAR" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //SOLAZ LOS CABOS

    if (formData.from === "SOLAZ LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "SOLAZ LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }

    //SOLMAR

    if (formData.from === "SOLMAR" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "SOLMAR" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //SOLEADO BEACH AND SPA
    if (formData.from === "SOLEADO BEACH AND SPA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "SOLEADO BEACH AND SPA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //SUITES LAS PALMAS
    if (formData.from === "SUITES LAS PALMAS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "SUITES LAS PALMAS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }

    //TERRASOL
    if (formData.from === "TERRASOL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "TERRASOL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //TESORO LOS CABOS
    if (formData.from === "TESORO LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "TESORO LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //THE CAPE THOMPSON
    if (formData.from === "THE CAPE THOMPSON" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "THE CAPE THOMPSON" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //THE GRAND MAYAN AT VIDANTA
    if (
      formData.from === "THE GRAND MAYAN AT VIDANTA" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 120 : 85;

    } else if (
      formData.from === "THE GRAND MAYAN AT VIDANTA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 140 : 105;

    }

    //THE WESTIN RESORT AND SPA
    if (formData.from === "THE WESTIN RESORT AND SPA" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (
      formData.from === "THE WESTIN RESORT AND SPA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 160 : 115;

    }
    //EL ENCANfrom INN
    if (formData.from === "EL ENCANfrom INN" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "EL ENCANfrom INN" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }

    //EL ENCANfrom DE LA LAGUNA
    if (formData.from === "EL ENCANfrom DE LA LAGUNA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "EL ENCANfrom DE LA LAGUNA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //EL ENCANfrom DE LA LAGUNA
    if (formData.from === "EL GANZO" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "EL GANZO" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }

    //EL ZALATE CONDOS
    if (formData.from === "EL ZALATE CONDOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "EL ZALATE CONDOS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }

    //ESPERANZA
    if (formData.from === "ESPERANZA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "ESPERANZA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //FAIRFIELD INN BY MARRIOT
    if (formData.from === "FAIRFIELD INN BY MARRIOT" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (
      formData.from === "FAIRFIELD INN BY MARRIOT" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;

    }
    //ESPERANZA
    if (formData.from === "FIESTA AMERICANA GRAND" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "FIESTA AMERICANA GRAND" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //ESPERANZA
    if (formData.from === "FLORA FARMS RESTAURANT" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "FLORA FARMS RESTAURANT" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //ESPERANZA
    if (
      formData.from === "FOUR SEASON RESORT LOS CABOS" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 560 : 305;

    } else if (
      formData.from === "FOUR SEASON RESORT LOS CABOS" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 580 : 325;

    }
    //ESPERANZA
    if (formData.from === "GARZA BLANCA RESORT" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "GARZA BLANCA RESORT" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //ESPERANZA
    if (
      formData.from === "GRAN SOLMAR PACIFIC DUNES GOLF AND SPA" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 170 : 115;

    } else if (
      formData.from === "GRAN SOLMAR PACIFIC DUNES GOLF AND SPA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 190 : 135;

    }
    //ESPERANZA
    if (
      formData.from === "GRAND SOLMAR RANCHO SAN LUCAS" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 170 : 115;

    } else if (
      formData.from === "GRAND SOLMAR RANCHO SAN LUCAS" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 190 : 135;

    }
    //ESPERANZA
    if (
      formData.from === "GRANS SOLMAR LANDS END RESORT SPA" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 150 : 105;

    } else if (
      formData.from === "GRANS SOLMAR LANDS END RESORT SPA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 170 : 125;

    }
    //ESPERANZA
    if (formData.from === "GRAN VELAS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "GRAN VELAS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //ESPERANZA
    if (formData.from === "HACIENDA BEACH" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "HACIENDA BEACH" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //ESPERANZA
    if (
      formData.from === "HACIENDA DEL MAR TIME SHARE" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 160 : 105;

    } else if (
      formData.from === "HACIENDA DEL MAR TIME SHARE" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;

    }
    //ESPERANZA
    if (formData.from === "HACIENDA ENCANTADA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "HACIENDA ENCANTADA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //ESPERANZA
    if (
      formData.from === "HAMPfromN INN SUITES BY HILfromN" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 140 : 95;

    } else if (
      formData.from === "HAMPfromN INN SUITES BY HILfromN" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 160 : 115;

    }
    //ESPERANZA
    if (formData.from === "HARD ROCK HOTEL LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 180 : 115;

    } else if (
      formData.from === "HARD ROCK HOTEL LOS CABOS" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 200 : 135;

    }
    //ESPERANZA
    if (formData.from === "HILfromN LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "HILfromN LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //ESPERANZA
    if (formData.from === "HOLIDAY LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "HOLIDAY LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //ESPERANZA
    if (formData.from === "HOLIDAY INN EXPRESS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "HOLIDAY INN EXPRESS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //ESPERANZA
    if (formData.from === "HOTEL CASTILLO BLARNEY" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "HOTEL CASTILLO BLARNEY" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //ESPERANZA
    if (formData.from === "HOTEL HACIENDA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "HOTEL HACIENDA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //ESPERANZA
    if (formData.from === "HYATT PLACE" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "HYATT PLACE" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    //ESPERANZA
    if (formData.from === "HYATT ZIVA" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "HYATT ZIVA" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    //ESPERANZA
    if (formData.from === "JW MARRIOTT RESORT SPA" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "JW MARRIOTT RESORT SPA" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //ESPERANZA
    if (formData.from === "KRISTAL GRAND LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "KRISTAL GRAND LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    //ESPERANZA
    if (formData.from === "LA JOLLA CONDOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "LA JOLLA CONDOS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    //ESPERANZA
    if (formData.from === "LA PACIFICA BY HILfromN" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "LA PACIFICA BY HILfromN" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //ESPERANZA
    if (formData.from === "LA PAZ" && vehicles === "Suburban") {
      basePrice = isReturn ? 510 : 280;

    } else if (formData.from === "LA PAZ" && vehicles === "VAN") {
      basePrice = isReturn ? 530 : 300;

    }
    if (formData.from === "LAS OLAS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "LAS OLAS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    if (formData.from === "LAS VENTANAS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "LAS VENTANAS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    if (formData.from === "LE BLANC LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "LE BLANC LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    if (formData.from === "LOS BARRILES" && vehicles === "Suburban") {
      basePrice = isReturn ? 380 : 215;

    } else if (formData.from === "LOS BARRILES" && vehicles === "VAN") {
      basePrice = isReturn ? 400 : 235;

    }
    if (formData.from === "LOS CABOS GOLF RESORT" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "LOS CABOS GOLF RESORT" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "LOS MILAGROS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "LOS MILAGROS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "LOS PATIOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "LOS PATIOS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "MAÑANITAS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "MAÑANITAS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    if (formData.from === "MAR DEL CABO" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "MAR DEL CABO" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }

    if (
      formData.from === "MARBELLA SUITES EN LA PLAYA" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 140 : 95;

    } else if (
      formData.from === "MARBELLA SUITES EN LA PLAYA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 160 : 115;

    }
    if (formData.from === "MARINA CABO PLAZA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "MARINA CABO PLAZA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "MARINA FIESTA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "MARINA FIESTA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "MARINA SOL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "MARINA SOL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "MARINA VIEW VILLAS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "MARINA VIEW VILLAS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "MARISOL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "MARISOL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "ME CABO" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "ME CABO" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "MIKONOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "MIKONOS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    if (formData.from === "MISIONES DEL CABO" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 70;

    } else if (formData.from === "MISIONES DEL CABO" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 70;

    }
    if (formData.from === "MONTAGE LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "MONTAGE LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    if (
      formData.from === "MONTECRISfrom RESIDENTIAL AREA" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 180 : 115;

    } else if (
      formData.from === "MONTECRISfrom RESIDENTIAL AREA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 200 : 135;

    }
    if (formData.from === "NOBU HOTEL LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 180 : 115;

    } else if (formData.from === "NOBU HOTEL LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 200 : 135;

    }
    if (formData.from === "ONE AND ONLY PALMILLA" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "ONE AND ONLY PALMILLA" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    if (formData.from === "PARADISUS LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "PARADISUS LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    if (formData.from === "PEDREGAL RESIDENTIAL AREA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (
      formData.from === "PEDREGAL RESIDENTIAL AREA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "PLAYA GRANDE" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "PLAYA GRANDE" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (
      formData.from === "PLAZA NAUTICA CONDOMINIUMS HOTEL" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 160 : 105;

    } else if (
      formData.from === "PLAZA NAUTICA CONDOMINIUMS HOTEL" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "PORfromFINO HOTEL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "PORfromFINO HOTEL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "POSADA REAL" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "POSADA REAL" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    if (formData.from === "PUEBLO BONIfrom LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "PUEBLO BONIfrom LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "fromDO SANfromS" && vehicles === "Suburban") {
      basePrice = isReturn ? 380 : 215;

    } else if (formData.from === "fromDO SANfromS" && vehicles === "VAN") {
      basePrice = isReturn ? 400 : 235

    }
    if (formData.from === "TROPICANA INN" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "TROPICANA INN" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    if (formData.from === "VICEROY LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.from === "VICEROY LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    if (formData.from === "VILLA DE ARCO" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "VILLA DE ARCO" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "VILLA DEL PALMAR" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "VILLA DEL PALMAR" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "VILLA LA ESTANCIA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "VILLA LA ESTANCIA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "VILLA VALENCIA" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "VILLA VALENCIA" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    if (
      formData.from === "VILLA VALENCIA RESORT AND SPA LOS CABOS" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 160 : 105;

    } else if (
      formData.from === "VILLA VALENCIA RESORT AND SPA LOS CABOS" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "VILLA SERENA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "VILLA SERENA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "VISTA VELA (PHASE 1)" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 105;

    } else if (formData.from === "VISTA VELA (PHASE 1)" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "VISTA VELA (PHASE 2)" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "VISTA VELA (PHASE 2)" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "VISTA VELA (PHASE 3)" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "VISTA VELA (PHASE 3)" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "WALDORF ASTURIAS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.from === "WALDORF ASTURIAS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.from === "ZOETRY CASA DEL MAR" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.from === "ZOETRY CASA DEL MAR" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }

    // Actualizar el estado con el precio calculado
    const convertedPrice = convertfromCurrency(basePrice, currency);
    setFormData((prevData) => ({
      ...prevData,
      price: convertedPrice, // Guardamos el precio calculado en formData
    }));
  }, [formData.currency, formData.isReturn, formData.from, formData.vehicles]);

  // Llamar a calculatePrice cuando alguna de las dependencias cambie
  useEffect(() => {
    calculatePrice();
  }, [
    formData.currency,
    formData.isReturn,
    formData.from,
    formData.vehicles,
    calculatePrice,
  ]);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem("formData", JSON.stringify(formData));
      console.log("Dafroms guardados en localStorage", formData);

      navigate("/book-now");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
  // Función para manejar el cambio de moneda
  const handleCurrencyChange = (currency) => {
    setFormData((prevData) => ({ ...prevData, currency }));
  };
  const {
    currency,
    vehicles,
    departureDate,
    departureTime,

    from,
  } = formData;
  const areasFrom = [
    "(SJD) Los Cabos international Airport",
    "(MMSL) Cabo San Lucas International Airport",
  ];
  const areas = [
    "BARCELO GRAN FARO",
    "BREATHLESS RESORT SPA",
    "BAJA POINT",
    "BAHIA HOTEL AND BEACH CLUB",
    "BUNGALOWS",
    "CABO AZUL",
    "CABO fromRTUGA",
    "CABO BELLO RESIDENTIAL",
    "CABO DEL SOL RESIDENTIAL AREA",
    "CABO PEDREGAL HOTEL",
    "CABO SAN LUCAS INN",
    "CABO SURF",
    "CABO VILLAS (CORAZON CABO RESORT SPA)",
    "CASA DORADA AT MEDANO BEACH",
    "CASA NATALIA",
    "CASA PABLIfrom",
    "CASA RAFAEL",
    "CASCADAS",
    "CHILENO BAY",
    "CLUB LA COSTA",
    "CLUB REGINA",
    "COMFORT INN",
    "CORAL BAJA",
    "DIAMANTE",
    "DREAMS",
    "EL AMEYAL",
    "PUEBLO BONIfrom PACIFICA",
    "PUEBLO BONIfrom ROSE",
    "PUEBLO BONIfrom SUNSET BEACH",
    "PUERfrom LOS CABOS RESIDENTIAL AREA",
    "QUINTA DEL SOL",
    "QUERENCIA RESIDENTIAL AREA",
    "UIVIRA RESIDENTIAL",
    "RITZ ZADUN",
    "RIU BAJA (ALL ADULTS RESORT)",
    "RIU PALACE",
    "RIU SANTA FE",
    "ROYAL DE CAMERON",
    "ROYAL PARK",
    "ROYAL SOLARIS",
    "SANDOS FINISTERRA",
    "SAMPAGUITA",
    "SECRETS PUERfrom LOS CABOS",
    "SEVEN CROWN",
    "SHERAfromN HOTEL",
    "SIESTA SUITES",
    "SIRENA DEL MAR",
    "SOLAZ LOS CABOS",
    "SOLMAR",
    "SOLEADO BEACH AND SPA",
    "SUITES LAS PALMAS",
    "TERRASOL",
    "TESORO LOS CABOS",
    "THE CAPE THOMPSON",
    "THE GRAND MAYAN AT VIDANTA",
    "THE WESTIN RESORT AND SPA",
    "EL ENCANfrom INN",
    "EL ENCANfrom DE LA LAGUNA",
    "EL GANZO",
    "EL ZALATE CONDOS",
    "ESPERANZA",

    "FAIRFIELD INN BY MARRIOT",

    "FIESTA AMERICANA GRAND",
    "FLORA FARMS RESTAURANT",
    "FOUR SEASON RESORT LOS CABOS",
    "GARZA BLANCA RESORT",
    "GRAN SOLMAR PACIFIC DUNES GOLF AND SPA",
    "GRAND SOLMAR RANCHO SAN LUCAS",
    "GRANS SOLMAR LANDS END RESORT SPA",
    "GRAN VELAS",
    "HACIENDA BEACH",
    "HACIENDA DEL MAR TIME SHARE",
    "HACIENDA ENCANTADA",
    "HAMPfromN INN SUITES BY HILfromN",
    "HARD ROCK HOTEL LOS CABOS",
    "HILfromN LOS CABOS",
    "HOLIDAY LOS CABOS",
    "HOLIDAY INN EXPRESS",
    "HOTEL CASTILLO BLARNEY",
    "HOTEL HACIENDA",
    "HYATT PLACE",
    "HYATT ZIVA",
    "JW MARRIOTT RESORT SPA",
    "KRISTAL GRAND LOS CABOS",
    "LA JOLLA CONDOS",
    "LA PACIFICA BY HILfromN",
    "LA PAZ",
    "LAS OLAS",
    "LAS VENTANAS",
    "LE BLANC LOS CABOS",
    "LOS BARRILES",
    "LOS CABOS GOLF RESORT",
    "LOS MILAGROS",
    "LOS PATIOS",
    "MAÑANITAS",
    "MAR DEL CABO",
    "MARBELLA SUITES EN LA PLAYA",
    "MARINA CABO PLAZA",
    "MARINA FIESTA",
    "MARINA SOL",
    "MARINA VIEW VILLAS",
    "MARISOL",
    "ME CABO",
    "MIKONOS",
    "MISIONES DEL CABO",
    "MONTAGE LOS CABOS",
    "MONTECRISfrom RESIDENTIAL AREA",
    "NOBU HOTEL LOS CABOS",
    "ONE AND ONLY PALMILLA",
    "PARADISUS LOS CABOS",
    "PEDREGAL RESIDENTIAL AREA",
    "PLAYA GRANDE",
    "PLAZA NAUTICA CONDOMINIUMS HOTEL",
    "PORfromFINO HOTEL",
    "POSADA REAL",
    "PUEBLO BONIfrom LOS CABOS",
    "fromDO SANfromS",
    "TROPICANA INN",
    "VICEROY LOS CABOS",
    "VILLA DE ARCO",
    "VILLA DEL PALMAR",
    "VILLA LA ESTANCIA",
    "VILLA VALENCIA",
    "VILLA VALENCIA RESORT AND SPA LOS CABOS",
    "VILLA SERENA",
    "VISTA VELA (PHASE 1)",
    "VISTA VELA (PHASE 2)",
    "VISTA VELA (PHASE 3)",
    "WALDORF ASTURIAS",
    "ZOETRY CASA DEL MAR",
  ];
  const normalizedAreas = areas.map((area) => area.trim());









  return (
    <div >

      <h2>From Hotel from Airport</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>From, pickup location</label>


          <select name="from" value={from} onChange={handleChange}>
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
        {/* from */}
        <div className="form-group">
          <label>Going from</label>
          <select name="from" value={from} onChange={handleChange}>
            {areasFrom.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
        {/* From */}





        {/* Departure Date & Time */}
        <div className="d-flex gap-2">
          <div className="form-group">
            <label>Departure Date</label>
            <input
              type="date"
              name="departureDate"
              value={departureDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Departure Time</label>
            <input
              type="time"
              name="departureTime"
              value={departureTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="d-flex gap-2 flex-wrap">
          <div className="form-group">
            <label>Vehicle</label>
            <select
              onChange={handleChange}
              name="vehicles"
              value={vehicles}
            >
              <option value="Suburban">Suburban</option>
              <option value="VAN">Van</option>

            </select>
          </div>

          {/* Passengers */}

        </div>

        {/* Return fromggle */}


        <div className="currency-fromggle">
          {["USD", "MXN"].map((curr) => (
            <butfromn
              key={curr}
              type="butfromn"
              className={currency === curr ? "active" : ""}
              onClick={() => handleCurrencyChange(curr)}
            >
              {curr}
            </butfromn>
          ))}
        </div>
        <div className="form-group">
          {normalizedAreas.includes(from.trim()) &&
            [
              "Suburban",
              "VAN",

            ].includes(vehicles) ? (
            <h1 style={{ textAlign: "center" }}>
              Total: ${formData.price} {currency}
            </h1>
          ) : null}
        </div>

        <div class="col-12">
          <button class="btn btn-primary w-100 py-2">Book Now</button>
        </div>
      </form>
    </div>

  );
}

export default FormHotelfromAirport;
