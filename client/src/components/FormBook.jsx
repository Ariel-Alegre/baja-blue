import React, { useState, useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FormHotelToAirport from "./FormHotelToAirport"
function FormBook() {
 const navigate =useNavigate()
  const [formData, setFormData] = useState({
    currency: "USD",
    isReturn: false,
    vehicles: "Suburban",
    passengers: "1",
    departureDate: "2025-08-05",
    departureTime: "01:01",
    returnDate: "2025-08-05",
    returnTime: "00:00",
    from: "(SJD) Los Cabos international Airpot",
    to: "BARCELO GRAN FARO",
    price: 0, // Inicializamos el precio como 0
  });

  const convertToCurrency = (amount, currency) => {
    const exchangeRate = 20.14; // Ejemplo: 1 USD = 18.5 MXN
    if (currency === "MXN") {
      return (amount * exchangeRate).toFixed(2);
    }
    return amount.toFixed(2); // Si es USD, se deja igual
  };

  // Calcular y actualizar el precio basado en el vehículo y si es retorno
const calculatePrice = useCallback(() => {
    let basePrice = 0;
    const { vehicles, isReturn, currency } = formData;
    // San Jose del Cabo
    if (formData.to === "BARCELO GRAN FARO" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;
    } else if (formData.to === "BARCELO GRAN FARO" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;
    }

    //Corridor
    if (formData.to === "BREATHLESS RESORT SPA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;
    } else if (formData.to === "BREATHLESS RESORT SPA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;
    }

    //Puerto Los Cabos
    if (formData.to === "BAJA POINT" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;
    } else if (formData.to === "BAJA POINT" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;
    }

    //Encanto la Laguna
    if (
      formData.to === "BAHIA HOTEL AND BEACH CLUB" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 160 : 105;
    } else if (
      formData.to === "BAHIA HOTEL AND BEACH CLUB" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;
    }

    //Cabo San Lucas
    if (formData.to === "BUNGALOWS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;
    } else if (formData.to === "BUNGALOWS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;
    }

    //Pacific
    if (formData.to === "CABO AZUL" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;
    } else if (formData.to === "CABO AZUL" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;
    }

    //Todos Santos
    if (formData.to === "CABO TORTUGA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;
    } else if (formData.to === "CABO TORTUGA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;
    }
    //Los Barriles
    if (formData.to === "CABO BELLO RESIDENTIAL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;
    } else if (formData.to === "CABO BELLO RESIDENTIAL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;
    }

    //La Paz
    if (
      formData.to === "CABO DEL SOL RESIDENTIAL AREA" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 160 : 105;
    } else if (
      formData.to === "CABO DEL SOL RESIDENTIAL AREA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;
    }
    //Diamante
    if (formData.to === "CABO PEDREGAL HOTEL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;
    } else if (formData.to === "CABO PEDREGAL HOTEL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;
    }
    //San Jose del Cabo - Tourist Corridor

    if (formData.to === "CABO SAN LUCAS INN" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "CABO SAN LUCAS INN" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //San Jose del Cabo - Cabo San Lucas

    if (formData.to === "CABO SURF" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "CABO SURF" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }

    //San Jose del Cabo - Pacific

    if (
      formData.to === "CABO VILLAS (CORAZON CABO RESORT SPA)" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 160 : 105;

    } else if (
      formData.to === "CABO VILLAS (CORAZON CABO RESORT SPA)" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;

    }

    //San Jose del Cabo - Puerto Los Cabos

    if (
      formData.to === "CASA DORADA AT MEDANO BEACH" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 160 : 105;

    } else if (
      formData.to === "CASA DORADA AT MEDANO BEACH" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;

    }

    //San Jose del Cabo - Los Barriles

    if (formData.to === "CASA NATALIA" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "CASA NATALIA" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;
      
    }
    //CASA PABLITO

    if (formData.to === "CASA PABLITO" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "CASA PABLITO" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //CASA RAFAEL

    if (formData.to === "CASA RAFAEL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "CASA RAFAEL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    if (formData.to === "CASCADAS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "CASCADAS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //CHILENO BAY

    if (formData.to === "CHILENO BAY" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "CHILENO BAY" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }

    //CLUB LA COSTA

    if (formData.to === "CLUB LA COSTA" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "CLUB LA COSTA" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    //CLUB REGINA

    if (formData.to === "CLUB REGINA" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "CLUB REGINA" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //COMFORT INN

    if (formData.to === "COMFORT INN" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "COMFORT INN" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //CORAL BAJA

    if (formData.to === "CORAL BAJA" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "CORAL BAJA" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }

    //DIAMANTE

    if (formData.to === "DIAMANTE" && vehicles === "Suburban") {
      basePrice = isReturn ? 180 : 115;

    } else if (formData.to === "DIAMANTE" && vehicles === "VAN") {
      basePrice = isReturn ? 200 : 135;

    }

    //DREAMS

    if (formData.to === "DREAMS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "DREAMS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //EL AMEYAL

    if (formData.to === "EL AMEYAL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "EL AMEYAL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //PUEBLO BONITO PACIFICA

    if (formData.to === "PUEBLO BONITO PACIFICA" && vehicles === "Suburban") {
      basePrice = isReturn ? 180 : 115;

    } else if (formData.to === "PUEBLO BONITO PACIFICA" && vehicles === "VAN") {
      basePrice = isReturn ? 200 : 135;

    }

    //PUEBLO BONITO ROSE

    if (formData.to === "PUEBLO BONITO ROSE" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "PUEBLO BONITO ROSE" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //PUEBLO BONITO SUNSET BEACH

    if (
      formData.to === "PUEBLO BONITO SUNSET BEACH" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 180 : 115;

    } else if (
      formData.to === "PUEBLO BONITO SUNSET BEACH" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 200 : 135;

    }

    //PUERTO LOS CABOS RESIDENTIAL AREA

    if (
      formData.to === "PUERTO LOS CABOS RESIDENTIAL AREA" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 140 : 95;

    } else if (
      formData.to === "PUERTO LOS CABOS RESIDENTIAL AREA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 160 : 115;

    }

    //QUINTA DEL SOL

    if (formData.to === "QUINTA DEL SOL" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "QUINTA DEL SOL" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //QUERENCIA RESIDENTIAL AREA

    if (
      formData.to === "QUERENCIA RESIDENTIAL AREA" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 140 : 95;

    } else if (
      formData.to === "QUERENCIA RESIDENTIAL AREA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 160 : 115;

    }

    //QUIVIRA RESIDENTIAL

    if (formData.to === "QUIVIRA RESIDENTIAL" && vehicles === "Suburban") {
      basePrice = isReturn ? 180 : 115;

    } else if (formData.to === "QUIVIRA RESIDENTIAL" && vehicles === "VAN") {
      basePrice = isReturn ? 200 : 135;
    
    }

    //RITZ ZADUN

    if (formData.to === "RITZ ZADUN" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "RITZ ZADUN" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //RIU BAJA (ALL ADULTS RESORT)

    if (
      formData.to === "RIU BAJA (ALL ADULTS RESORT)" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 160 : 105;

    } else if (
      formData.to === "RIU BAJA (ALL ADULTS RESORT)" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;

    }

    //RIU PALACE

    if (formData.to === "RIU PALACE" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "RIU PALACE" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //RIU SANTA FE

    if (formData.to === "RIU SANTA FE" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "RIU SANTA FE" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //ROYAL DE CAMERON

    if (formData.to === "ROYAL DE CAMERON" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "ROYAL DE CAMERON" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    //ROYAL PARK

    if (formData.to === "ROYAL PARK" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "ROYAL PARK" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    //ROYAL SOLARIS

    if (formData.to === "ROYAL SOLARIS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "ROYAL SOLARIS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }

    //SANDOS FINISTERRA

    if (formData.to === "SANDOS FINISTERRA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "SANDOS FINISTERRA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //SAMPAGUITA

    if (formData.to === "SAMPAGUITA" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "SAMPAGUITA" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }

    //SECRETS PUERTO LOS CABOS

    if (formData.to === "SECRETS PUERTO LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (
      formData.to === "SECRETS PUERTO LOS CABOS" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 160 : 115;

    }

    //SEVEN CROWN

    if (formData.to === "SEVEN CROWN" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "SEVEN CROWN" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //SHERATON HOTEL

    if (formData.to === "SHERATON HOTEL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "SHERATON HOTEL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //SIESTA SUITES

    if (formData.to === "SIESTA SUITES" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "SIESTA SUITES" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //SIRENA DEL MAR

    if (formData.to === "SIRENA DEL MAR" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "SIRENA DEL MAR" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //SOLAZ LOS CABOS

    if (formData.to === "SOLAZ LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "SOLAZ LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }

    //SOLMAR

    if (formData.to === "SOLMAR" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "SOLMAR" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //SOLEADO BEACH AND SPA
    if (formData.to === "SOLEADO BEACH AND SPA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "SOLEADO BEACH AND SPA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //SUITES LAS PALMAS
    if (formData.to === "SUITES LAS PALMAS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "SUITES LAS PALMAS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }

    //TERRASOL
    if (formData.to === "TERRASOL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "TERRASOL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //TESORO LOS CABOS
    if (formData.to === "TESORO LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "TESORO LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //THE CAPE THOMPSON
    if (formData.to === "THE CAPE THOMPSON" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "THE CAPE THOMPSON" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //THE GRAND MAYAN AT VIDANTA
    if (
      formData.to === "THE GRAND MAYAN AT VIDANTA" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 120 : 85;

    } else if (
      formData.to === "THE GRAND MAYAN AT VIDANTA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 140 : 105;

    }

    //THE WESTIN RESORT AND SPA
    if (formData.to === "THE WESTIN RESORT AND SPA" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (
      formData.to === "THE WESTIN RESORT AND SPA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 160 : 115;

    }
    //EL ENCANTO INN
    if (formData.to === "EL ENCANTO INN" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "EL ENCANTO INN" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }

    //EL ENCANTO DE LA LAGUNA
    if (formData.to === "EL ENCANTO DE LA LAGUNA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "EL ENCANTO DE LA LAGUNA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }

    //EL ENCANTO DE LA LAGUNA
    if (formData.to === "EL GANZO" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "EL GANZO" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }

    //EL ZALATE CONDOS
    if (formData.to === "EL ZALATE CONDOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "EL ZALATE CONDOS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }

    //ESPERANZA
    if (formData.to === "ESPERANZA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "ESPERANZA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    
    //FAIRFIELD INN BY MARRIOT
    if (formData.to === "FAIRFIELD INN BY MARRIOT" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (
      formData.to === "FAIRFIELD INN BY MARRIOT" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;

    }
    //ESPERANZA
    if (formData.to === "FIESTA AMERICANA GRAND" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "FIESTA AMERICANA GRAND" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //ESPERANZA
    if (formData.to === "FLORA FARMS RESTAURANT" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "FLORA FARMS RESTAURANT" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //ESPERANZA
    if (
      formData.to === "FOUR SEASON RESORT LOS CABOS" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 560 : 305;

    } else if (
      formData.to === "FOUR SEASON RESORT LOS CABOS" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 580 : 325;

    }
    //ESPERANZA
    if (formData.to === "GARZA BLANCA RESORT" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "GARZA BLANCA RESORT" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //ESPERANZA
    if (
      formData.to === "GRAN SOLMAR PACIFIC DUNES GOLF AND SPA" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 170 : 115;

    } else if (
      formData.to === "GRAN SOLMAR PACIFIC DUNES GOLF AND SPA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 190 : 135;

    }
    //ESPERANZA
    if (
      formData.to === "GRAND SOLMAR RANCHO SAN LUCAS" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 170 : 115;

    } else if (
      formData.to === "GRAND SOLMAR RANCHO SAN LUCAS" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 190 : 135;

    }
    //ESPERANZA
    if (
      formData.to === "GRANS SOLMAR LANDS END RESORT SPA" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 150 : 105;

    } else if (
      formData.to === "GRANS SOLMAR LANDS END RESORT SPA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 170 : 125;

    }
    //ESPERANZA
    if (formData.to === "GRAN VELAS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "GRAN VELAS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //ESPERANZA
    if (formData.to === "HACIENDA BEACH" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "HACIENDA BEACH" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //ESPERANZA
    if (
      formData.to === "HACIENDA DEL MAR TIME SHARE" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 160 : 105;

    } else if (
      formData.to === "HACIENDA DEL MAR TIME SHARE" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;

    }
    //ESPERANZA
    if (formData.to === "HACIENDA ENCANTADA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "HACIENDA ENCANTADA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //ESPERANZA
    if (
      formData.to === "HAMPTON INN SUITES BY HILTON" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 140 : 95;

    } else if (
      formData.to === "HAMPTON INN SUITES BY HILTON" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 160 : 115;

    }
    //ESPERANZA
    if (formData.to === "HARD ROCK HOTEL LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 180 : 115;

    } else if (
      formData.to === "HARD ROCK HOTEL LOS CABOS" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 200 : 135;

    }
    //ESPERANZA
    if (formData.to === "HILTON LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "HILTON LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //ESPERANZA
    if (formData.to === "HOLIDAY LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "HOLIDAY LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //ESPERANZA
    if (formData.to === "HOLIDAY INN EXPRESS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "HOLIDAY INN EXPRESS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //ESPERANZA
    if (formData.to === "HOTEL CASTILLO BLARNEY" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "HOTEL CASTILLO BLARNEY" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //ESPERANZA
    if (formData.to === "HOTEL HACIENDA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "HOTEL HACIENDA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    //ESPERANZA
    if (formData.to === "HYATT PLACE" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "HYATT PLACE" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    //ESPERANZA
    if (formData.to === "HYATT ZIVA" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "HYATT ZIVA" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    //ESPERANZA
    if (formData.to === "JW MARRIOTT RESORT SPA" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "JW MARRIOTT RESORT SPA" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //ESPERANZA
    if (formData.to === "KRISTAL GRAND LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "KRISTAL GRAND LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    //ESPERANZA
    if (formData.to === "LA JOLLA CONDOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "LA JOLLA CONDOS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    //ESPERANZA
    if (formData.to === "LA PACIFICA BY HILTON" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "LA PACIFICA BY HILTON" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    //ESPERANZA
    if (formData.to === "LA PAZ" && vehicles === "Suburban") {
      basePrice = isReturn ? 510 : 280;

    } else if (formData.to === "LA PAZ" && vehicles === "VAN") {
      basePrice = isReturn ? 530 : 300;

    }
    if (formData.to === "LAS OLAS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "LAS OLAS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    if (formData.to === "LAS VENTANAS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "LAS VENTANAS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    if (formData.to === "LE BLANC LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "LE BLANC LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    if (formData.to === "LOS BARRILES" && vehicles === "Suburban") {
      basePrice = isReturn ? 380 : 215;

    } else if (formData.to === "LOS BARRILES" && vehicles === "VAN") {
      basePrice = isReturn ? 400 : 235;

    }
    if (formData.to === "LOS CABOS GOLF RESORT" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "LOS CABOS GOLF RESORT" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "LOS MILAGROS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "LOS MILAGROS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "LOS PATIOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "LOS PATIOS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "MAÑANITAS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "MAÑANITAS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    if (formData.to === "MAR DEL CABO" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "MAR DEL CABO" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }

    if (
      formData.to === "MARBELLA SUITES EN LA PLAYA" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 140 : 95;

    } else if (
      formData.to === "MARBELLA SUITES EN LA PLAYA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 160 : 115;

    }
    if (formData.to === "MARINA CABO PLAZA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "MARINA CABO PLAZA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "MARINA FIESTA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "MARINA FIESTA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "MARINA SOL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "MARINA SOL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "MARINA VIEW VILLAS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "MARINA VIEW VILLAS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "MARISOL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "MARISOL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "ME CABO" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "ME CABO" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "MIKONOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "MIKONOS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    if (formData.to === "MISIONES DEL CABO" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 70;

    } else if (formData.to === "MISIONES DEL CABO" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 70;

    }
    if (formData.to === "MONTAGE LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "MONTAGE LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    if (
      formData.to === "MONTECRISTO RESIDENTIAL AREA" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 180 : 115;

    } else if (
      formData.to === "MONTECRISTO RESIDENTIAL AREA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 200 : 135;

    }
    if (formData.to === "NOBU HOTEL LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 180 : 115;

    } else if (formData.to === "NOBU HOTEL LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 200 : 135;

    }
    if (formData.to === "ONE AND ONLY PALMILLA" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "ONE AND ONLY PALMILLA" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    if (formData.to === "PARADISUS LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "PARADISUS LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    if (formData.to === "PEDREGAL RESIDENTIAL AREA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (
      formData.to === "PEDREGAL RESIDENTIAL AREA" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "PLAYA GRANDE" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "PLAYA GRANDE" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (
      formData.to === "PLAZA NAUTICA CONDOMINIUMS HOTEL" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 160 : 105;

    } else if (
      formData.to === "PLAZA NAUTICA CONDOMINIUMS HOTEL" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "PORTOFINO HOTEL" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "PORTOFINO HOTEL" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "POSADA REAL" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "POSADA REAL" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    if (formData.to === "PUEBLO BONITO LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "PUEBLO BONITO LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "TODO SANTOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 380 : 215;

    } else if (formData.to === "TODO SANTOS" && vehicles === "VAN") {
      basePrice = isReturn ? 400 : 235

    }
    if (formData.to === "TROPICANA INN" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "TROPICANA INN" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    if (formData.to === "VICEROY LOS CABOS" && vehicles === "Suburban") {
      basePrice = isReturn ? 120 : 85;

    } else if (formData.to === "VICEROY LOS CABOS" && vehicles === "VAN") {
      basePrice = isReturn ? 140 : 105;

    }
    if (formData.to === "VILLA DE ARCO" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "VILLA DE ARCO" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "VILLA DEL PALMAR" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "VILLA DEL PALMAR" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "VILLA LA ESTANCIA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "VILLA LA ESTANCIA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "VILLA VALENCIA" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "VILLA VALENCIA" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }
    if (
      formData.to === "VILLA VALENCIA RESORT AND SPA LOS CABOS" &&
      vehicles === "Suburban"
    ) {
      basePrice = isReturn ? 160 : 105;

    } else if (
      formData.to === "VILLA VALENCIA RESORT AND SPA LOS CABOS" &&
      vehicles === "VAN"
    ) {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "VILLA SERENA" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "VILLA SERENA" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "VISTA VELA (PHASE 1)" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 105;

    } else if (formData.to === "VISTA VELA (PHASE 1)" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "VISTA VELA (PHASE 2)" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "VISTA VELA (PHASE 2)" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "VISTA VELA (PHASE 3)" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "VISTA VELA (PHASE 3)" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "WALDORF ASTURIAS" && vehicles === "Suburban") {
      basePrice = isReturn ? 160 : 105;

    } else if (formData.to === "WALDORF ASTURIAS" && vehicles === "VAN") {
      basePrice = isReturn ? 180 : 125;

    }
    if (formData.to === "ZOETRY CASA DEL MAR" && vehicles === "Suburban") {
      basePrice = isReturn ? 140 : 95;

    } else if (formData.to === "ZOETRY CASA DEL MAR" && vehicles === "VAN") {
      basePrice = isReturn ? 160 : 115;

    }

    // Actualizar el estado con el precio calculado
    const convertedPrice = convertToCurrency(basePrice, currency);
    setFormData((prevData) => ({
      ...prevData,
      price: convertedPrice, // Guardamos el precio calculado en formData
    }));
  }, [formData.currency, formData.isReturn, formData.to, formData.vehicles]);
  const {
    currency,
    isReturn,
    vehicles,
    departureDate,
    departureTime,
    returnDate,
    returnTime,
    from,
    to,
  } = formData;
  // Llamar a calculatePrice cuando alguna de las dependencias cambie
  useEffect(() => {
    calculatePrice();
  }, [
    formData.currency,
    formData.isReturn,
    formData.to,
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
      console.log("Datos guardados en localStorage", formData);

      navigate("/book-now");
    } catch (error) {
      console.error("Error saving data:", error);
    } 
  };
  // Función para manejar el cambio de moneda
  const handleCurrencyChange = (currency) => {
    setFormData((prevData) => ({ ...prevData, currency }));
  };

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
    "CABO TORTUGA",
    "CABO BELLO RESIDENTIAL",
    "CABO DEL SOL RESIDENTIAL AREA",
    "CABO PEDREGAL HOTEL",
    "CABO SAN LUCAS INN",
    "CABO SURF",
    "CABO VILLAS (CORAZON CABO RESORT SPA)",
    "CASA DORADA AT MEDANO BEACH",
    "CASA NATALIA",
    "CASA PABLITO",
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
    "PUEBLO BONITO PACIFICA",
    "PUEBLO BONITO ROSE",
    "PUEBLO BONITO SUNSET BEACH",
    "PUERTO LOS CABOS RESIDENTIAL AREA",
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
    "SECRETS PUERTO LOS CABOS",
    "SEVEN CROWN",
    "SHERATON HOTEL",
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
    "EL ENCANTO INN",
    "EL ENCANTO DE LA LAGUNA",
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
    "HAMPTON INN SUITES BY HILTON",
    "HARD ROCK HOTEL LOS CABOS",
    "HILTON LOS CABOS",
    "HOLIDAY LOS CABOS",
    "HOLIDAY INN EXPRESS",
    "HOTEL CASTILLO BLARNEY",
    "HOTEL HACIENDA",
    "HYATT PLACE",
    "HYATT ZIVA",
    "JW MARRIOTT RESORT SPA",
    "KRISTAL GRAND LOS CABOS",
    "LA JOLLA CONDOS",
    "LA PACIFICA BY HILTON",
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
    "MONTECRISTO RESIDENTIAL AREA",
    "NOBU HOTEL LOS CABOS",
    "ONE AND ONLY PALMILLA",
    "PARADISUS LOS CABOS",
    "PEDREGAL RESIDENTIAL AREA",
    "PLAYA GRANDE",
    "PLAZA NAUTICA CONDOMINIUMS HOTEL",
    "PORTOFINO HOTEL",
    "POSADA REAL",
    "PUEBLO BONITO LOS CABOS",
    "TODO SANTOS",
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
    <div className="form-container py-5">
      <div className="booking-container ">
        <Tabs
          defaultActiveKey="From Airport to Hotel"
          id="fill-tab-example"
          className="mb-3"
          fill
         
        >
          <Tab eventKey="From Airport to Hotel" title="From Airport to Hotel"  >
            <h2>From Airport to Hotel</h2>
            <form onSubmit={handleSubmit}>
              {/* Currency Toggle */}

              {/* From */}

              <div className="form-group">
                <label>from</label>
                <select name="from" value={from} onChange={handleChange}>
                  {areasFrom.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              {/* To */}
              <div className="form-group">
                <label>Destination</label>
                <select name="to" value={to} onChange={handleChange}>
                  {areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

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

              {/* Return Toggle */}

              {normalizedAreas.includes(to.trim()) ? (
                <>
                  <div className="toggle-switch">
                    <input
                      type="checkbox"
                      id="return-toggle"
                      name="isReturn"
                      checked={isReturn}
                      onChange={handleChange}
                    />
                    <label htmlFor="return-toggle">
                      <span className="switch"></span>
                      <strong className="text-dark">Round trip</strong>
                    </label>
                  </div>

                  {/* Return Date & Time */}
                  {isReturn && (
                    <>
                      <div className="d-flex gap-2">
                        <div className="form-group">
                          <label>Return Date</label>
                          <input
                            type="date"
                            name="returnDate"
                            value={returnDate}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <label>Return Time</label>
                          <input
                            type="time"
                            name="returnTime"
                            value={returnTime}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </>
              ) : null}
              <div className="currency-toggle">
                {["USD", "MXN"].map((curr) => (
                  <button
                    key={curr}
                    type="button"
                    className={currency === curr ? "active" : ""}
                    onClick={() => handleCurrencyChange(curr)}
                  >
                    {curr}
                  </button>
                ))}
              </div>
              <div className="form-group">
                {normalizedAreas.includes(to.trim()) &&
                [
                  "Suburban",
                  "VAN",
                 
                ].includes(vehicles) ? (
                  <h1 style={{ textAlign: "center" }}>
                    Total: ${formData.price} {currency}
                  </h1>
                ) : null}
              </div>

              {/* Submit Button */}
              <div class="col-12">
                <button class="btn btn-primary w-100 py-2">Book Now</button>
              </div>
            </form>
          </Tab>
          <Tab eventKey="From Hotel to Airport" title="From Hotel to Airport">
            <FormHotelToAirport/>
        
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default FormBook;
