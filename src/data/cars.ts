// Türkiye'de 2000-2025 arası satışa sunulan araçların marka/model/motor veritabanı.
// Alfabetik marka sırası. Her motor için gerçek fabrika HP değeri ve yakıt tipi.
// Stage 1 güç artışı tutarlı hesaplama için kullanılır.

export type Fuel = "benzin" | "dizel" | "hybrid" | "elektrik";

export interface MotorOption {
  hp: number;
  fuel: Fuel;
}

export type ModelMap = Record<string, Record<string, MotorOption>>;
export type BrandMap = Record<string, ModelMap>;

export const CAR_DATABASE: BrandMap = {
  "Alfa Romeo": {
    Giulietta: {
      "1.4 TB 120 HP": { hp: 120, fuel: "benzin" },
      "1.4 TB 170 HP": { hp: 170, fuel: "benzin" },
      "1.6 JTDM 105 HP": { hp: 105, fuel: "dizel" },
      "1.6 JTDM 120 HP": { hp: 120, fuel: "dizel" },
      "2.0 JTDM 140 HP": { hp: 140, fuel: "dizel" },
      "2.0 JTDM 170 HP": { hp: 170, fuel: "dizel" },
    },
    Giulia: {
      "2.0 TB 200 HP": { hp: 200, fuel: "benzin" },
      "2.2 D 150 HP": { hp: 150, fuel: "dizel" },
      "2.2 D 180 HP": { hp: 180, fuel: "dizel" },
      "2.2 D 210 HP": { hp: 210, fuel: "dizel" },
      "2.9 V6 510 HP": { hp: 510, fuel: "benzin" },
    },
    Stelvio: {
      "2.0 TB 280 HP": { hp: 280, fuel: "benzin" },
      "2.2 D 180 HP": { hp: 180, fuel: "dizel" },
      "2.2 D 210 HP": { hp: 210, fuel: "dizel" },
    },
    Mito: {
      "1.4 TB 140 HP": { hp: 140, fuel: "benzin" },
      "1.4 TB 170 HP": { hp: 170, fuel: "benzin" },
      "1.3 JTDM 95 HP": { hp: 95, fuel: "dizel" },
      "1.6 JTDM 120 HP": { hp: 120, fuel: "dizel" },
    },
  },

  Audi: {
    "A1": {
      "1.0 TFSI 95 HP": { hp: 95, fuel: "benzin" },
      "1.4 TFSI 125 HP": { hp: 125, fuel: "benzin" },
      "1.4 TFSI 150 HP": { hp: 150, fuel: "benzin" },
      "1.6 TDI 116 HP": { hp: 116, fuel: "dizel" },
      "S1 2.0 TFSI 231 HP": { hp: 231, fuel: "benzin" },
    },
    "A3": {
      "1.4 TFSI 125 HP": { hp: 125, fuel: "benzin" },
      "1.5 TFSI 150 HP": { hp: 150, fuel: "benzin" },
      "1.6 TDI 110 HP": { hp: 110, fuel: "dizel" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 TDI 184 HP": { hp: 184, fuel: "dizel" },
      "2.0 TFSI 190 HP": { hp: 190, fuel: "benzin" },
      "S3 2.0 TFSI 310 HP": { hp: 310, fuel: "benzin" },
      "RS3 2.5 TFSI 400 HP": { hp: 400, fuel: "benzin" },
    },
    "A4": {
      "1.4 TFSI 150 HP": { hp: 150, fuel: "benzin" },
      "2.0 TFSI 190 HP": { hp: 190, fuel: "benzin" },
      "2.0 TFSI 252 HP": { hp: 252, fuel: "benzin" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 TDI 190 HP": { hp: 190, fuel: "dizel" },
      "3.0 TDI 218 HP": { hp: 218, fuel: "dizel" },
      "3.0 TDI 272 HP": { hp: 272, fuel: "dizel" },
      "S4 3.0 TFSI 354 HP": { hp: 354, fuel: "benzin" },
      "RS4 2.9 TFSI 450 HP": { hp: 450, fuel: "benzin" },
    },
    "A5": {
      "2.0 TFSI 190 HP": { hp: 190, fuel: "benzin" },
      "2.0 TFSI 252 HP": { hp: 252, fuel: "benzin" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 TDI 190 HP": { hp: 190, fuel: "dizel" },
      "3.0 TDI 218 HP": { hp: 218, fuel: "dizel" },
      "S5 3.0 TFSI 354 HP": { hp: 354, fuel: "benzin" },
      "RS5 2.9 TFSI 450 HP": { hp: 450, fuel: "benzin" },
    },
    "A6": {
      "2.0 TDI 190 HP": { hp: 190, fuel: "dizel" },
      "3.0 TDI 218 HP": { hp: 218, fuel: "dizel" },
      "3.0 TDI 272 HP": { hp: 272, fuel: "dizel" },
      "3.0 TDI 286 HP": { hp: 286, fuel: "dizel" },
      "2.0 TFSI 252 HP": { hp: 252, fuel: "benzin" },
      "3.0 TFSI 340 HP": { hp: 340, fuel: "benzin" },
      "S6 2.9 TFSI 450 HP": { hp: 450, fuel: "benzin" },
    },
    "A7": {
      "3.0 TDI 272 HP": { hp: 272, fuel: "dizel" },
      "3.0 TDI 286 HP": { hp: 286, fuel: "dizel" },
      "3.0 TFSI 340 HP": { hp: 340, fuel: "benzin" },
      "RS7 4.0 TFSI 600 HP": { hp: 600, fuel: "benzin" },
    },
    "A8": {
      "3.0 TDI 286 HP": { hp: 286, fuel: "dizel" },
      "3.0 TFSI 340 HP": { hp: 340, fuel: "benzin" },
      "4.0 TFSI 460 HP": { hp: 460, fuel: "benzin" },
    },
    "Q2": {
      "1.0 TFSI 116 HP": { hp: 116, fuel: "benzin" },
      "1.4 TFSI 150 HP": { hp: 150, fuel: "benzin" },
      "1.6 TDI 116 HP": { hp: 116, fuel: "dizel" },
    },
    "Q3": {
      "1.4 TFSI 150 HP": { hp: 150, fuel: "benzin" },
      "2.0 TFSI 230 HP": { hp: 230, fuel: "benzin" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
      "RSQ3 2.5 TFSI 400 HP": { hp: 400, fuel: "benzin" },
    },
    "Q5": {
      "2.0 TDI 190 HP": { hp: 190, fuel: "dizel" },
      "3.0 TDI 218 HP": { hp: 218, fuel: "dizel" },
      "2.0 TFSI 252 HP": { hp: 252, fuel: "benzin" },
      "SQ5 3.0 TFSI 354 HP": { hp: 354, fuel: "benzin" },
    },
    "Q7": {
      "3.0 TDI 218 HP": { hp: 218, fuel: "dizel" },
      "3.0 TDI 272 HP": { hp: 272, fuel: "dizel" },
      "3.0 TFSI 333 HP": { hp: 333, fuel: "benzin" },
      "SQ7 4.0 TDI 435 HP": { hp: 435, fuel: "dizel" },
    },
    "Q8": {
      "3.0 TDI 286 HP": { hp: 286, fuel: "dizel" },
      "3.0 TFSI 340 HP": { hp: 340, fuel: "benzin" },
      "SQ8 4.0 TDI 435 HP": { hp: 435, fuel: "dizel" },
    },
    "TT": {
      "1.8 TFSI 180 HP": { hp: 180, fuel: "benzin" },
      "2.0 TFSI 230 HP": { hp: 230, fuel: "benzin" },
      "2.0 TDI 184 HP": { hp: 184, fuel: "dizel" },
      "TTS 2.0 TFSI 310 HP": { hp: 310, fuel: "benzin" },
      "TT RS 2.5 TFSI 400 HP": { hp: 400, fuel: "benzin" },
    },
  },

  BMW: {
    "1 Serisi": {
      "116d 116 HP": { hp: 116, fuel: "dizel" },
      "118d 150 HP": { hp: 150, fuel: "dizel" },
      "120d 190 HP": { hp: 190, fuel: "dizel" },
      "118i 140 HP": { hp: 140, fuel: "benzin" },
      "120i 184 HP": { hp: 184, fuel: "benzin" },
      "M135i 306 HP": { hp: 306, fuel: "benzin" },
    },
    "2 Serisi": {
      "218d 150 HP": { hp: 150, fuel: "dizel" },
      "220d 190 HP": { hp: 190, fuel: "dizel" },
      "220i 184 HP": { hp: 184, fuel: "benzin" },
      "M240i 374 HP": { hp: 374, fuel: "benzin" },
    },
    "3 Serisi": {
      "316d 116 HP": { hp: 116, fuel: "dizel" },
      "318d 150 HP": { hp: 150, fuel: "dizel" },
      "320d 190 HP": { hp: 190, fuel: "dizel" },
      "330d 265 HP": { hp: 265, fuel: "dizel" },
      "318i 156 HP": { hp: 156, fuel: "benzin" },
      "320i 184 HP": { hp: 184, fuel: "benzin" },
      "330i 258 HP": { hp: 258, fuel: "benzin" },
      "M340i 374 HP": { hp: 374, fuel: "benzin" },
      "M3 480 HP": { hp: 480, fuel: "benzin" },
    },
    "4 Serisi": {
      "420d 190 HP": { hp: 190, fuel: "dizel" },
      "430d 286 HP": { hp: 286, fuel: "dizel" },
      "420i 184 HP": { hp: 184, fuel: "benzin" },
      "430i 258 HP": { hp: 258, fuel: "benzin" },
      "M440i 374 HP": { hp: 374, fuel: "benzin" },
      "M4 510 HP": { hp: 510, fuel: "benzin" },
    },
    "5 Serisi": {
      "518d 150 HP": { hp: 150, fuel: "dizel" },
      "520d 190 HP": { hp: 190, fuel: "dizel" },
      "530d 265 HP": { hp: 265, fuel: "dizel" },
      "540d 340 HP": { hp: 340, fuel: "dizel" },
      "520i 184 HP": { hp: 184, fuel: "benzin" },
      "530i 252 HP": { hp: 252, fuel: "benzin" },
      "M550i 462 HP": { hp: 462, fuel: "benzin" },
      "M5 600 HP": { hp: 600, fuel: "benzin" },
    },
    "7 Serisi": {
      "730d 265 HP": { hp: 265, fuel: "dizel" },
      "740d 320 HP": { hp: 320, fuel: "dizel" },
      "740i 333 HP": { hp: 333, fuel: "benzin" },
      "750i 530 HP": { hp: 530, fuel: "benzin" },
    },
    "X1": {
      "sDrive18d 150 HP": { hp: 150, fuel: "dizel" },
      "xDrive20d 190 HP": { hp: 190, fuel: "dizel" },
      "sDrive18i 136 HP": { hp: 136, fuel: "benzin" },
      "xDrive20i 192 HP": { hp: 192, fuel: "benzin" },
    },
    "X2": {
      "sDrive18d 150 HP": { hp: 150, fuel: "dizel" },
      "xDrive20d 190 HP": { hp: 190, fuel: "dizel" },
      "sDrive18i 136 HP": { hp: 136, fuel: "benzin" },
    },
    "X3": {
      "xDrive18d 150 HP": { hp: 150, fuel: "dizel" },
      "xDrive20d 190 HP": { hp: 190, fuel: "dizel" },
      "xDrive30d 265 HP": { hp: 265, fuel: "dizel" },
      "xDrive20i 184 HP": { hp: 184, fuel: "benzin" },
      "M40i 360 HP": { hp: 360, fuel: "benzin" },
    },
    "X4": {
      "xDrive20d 190 HP": { hp: 190, fuel: "dizel" },
      "xDrive30d 265 HP": { hp: 265, fuel: "dizel" },
      "M40i 360 HP": { hp: 360, fuel: "benzin" },
    },
    "X5": {
      "xDrive25d 218 HP": { hp: 218, fuel: "dizel" },
      "xDrive30d 265 HP": { hp: 265, fuel: "dizel" },
      "xDrive40i 340 HP": { hp: 340, fuel: "benzin" },
      "M50i 530 HP": { hp: 530, fuel: "benzin" },
    },
    "X6": {
      "xDrive30d 265 HP": { hp: 265, fuel: "dizel" },
      "M50i 530 HP": { hp: 530, fuel: "benzin" },
    },
    "X7": {
      "xDrive30d 265 HP": { hp: 265, fuel: "dizel" },
      "xDrive40i 340 HP": { hp: 340, fuel: "benzin" },
    },
  },

  Chevrolet: {
    Cruze: {
      "1.4 Turbo 153 HP": { hp: 153, fuel: "benzin" },
      "1.6 124 HP": { hp: 124, fuel: "benzin" },
      "1.7 D 131 HP": { hp: 131, fuel: "dizel" },
      "2.0 D 163 HP": { hp: 163, fuel: "dizel" },
    },
    Aveo: {
      "1.2 86 HP": { hp: 86, fuel: "benzin" },
      "1.4 101 HP": { hp: 101, fuel: "benzin" },
      "1.3 D 75 HP": { hp: 75, fuel: "dizel" },
    },
    Spark: {
      "1.0 68 HP": { hp: 68, fuel: "benzin" },
      "1.2 81 HP": { hp: 81, fuel: "benzin" },
    },
    Captiva: {
      "2.0 D 150 HP": { hp: 150, fuel: "dizel" },
      "2.2 D 184 HP": { hp: 184, fuel: "dizel" },
      "2.4 167 HP": { hp: 167, fuel: "benzin" },
    },
  },

  Citroën: {
    "C3": {
      "1.2 PureTech 83 HP": { hp: 83, fuel: "benzin" },
      "1.2 PureTech 110 HP": { hp: 110, fuel: "benzin" },
      "1.5 BlueHDi 100 HP": { hp: 100, fuel: "dizel" },
    },
    "C4": {
      "1.2 PureTech 130 HP": { hp: 130, fuel: "benzin" },
      "1.5 BlueHDi 130 HP": { hp: 130, fuel: "dizel" },
      "1.6 HDi 112 HP": { hp: 112, fuel: "dizel" },
      "2.0 HDi 150 HP": { hp: 150, fuel: "dizel" },
    },
    "C5 Aircross": {
      "1.5 BlueHDi 130 HP": { hp: 130, fuel: "dizel" },
      "2.0 BlueHDi 180 HP": { hp: 180, fuel: "dizel" },
      "1.6 PureTech 181 HP": { hp: 181, fuel: "benzin" },
    },
    "C-Elysee": {
      "1.2 PureTech 82 HP": { hp: 82, fuel: "benzin" },
      "1.6 HDi 92 HP": { hp: 92, fuel: "dizel" },
    },
    Jumper: {
      "2.0 BlueHDi 110 HP": { hp: 110, fuel: "dizel" },
      "2.2 BlueHDi 140 HP": { hp: 140, fuel: "dizel" },
      "2.2 BlueHDi 165 HP": { hp: 165, fuel: "dizel" },
    },
    Jumpy: {
      "1.6 HDi 90 HP": { hp: 90, fuel: "dizel" },
      "2.0 BlueHDi 122 HP": { hp: 122, fuel: "dizel" },
      "2.0 BlueHDi 150 HP": { hp: 150, fuel: "dizel" },
    },
  },

  Dacia: {
    Duster: {
      "1.0 TCe 100 HP": { hp: 100, fuel: "benzin" },
      "1.3 TCe 130 HP": { hp: 130, fuel: "benzin" },
      "1.3 TCe 150 HP": { hp: 150, fuel: "benzin" },
      "1.5 dCi 90 HP": { hp: 90, fuel: "dizel" },
      "1.5 dCi 115 HP": { hp: 115, fuel: "dizel" },
    },
    Sandero: {
      "1.0 SCe 67 HP": { hp: 67, fuel: "benzin" },
      "1.0 TCe 90 HP": { hp: 90, fuel: "benzin" },
      "1.0 TCe 100 HP": { hp: 100, fuel: "benzin" },
      "1.5 dCi 90 HP": { hp: 90, fuel: "dizel" },
    },
    Logan: {
      "1.0 SCe 67 HP": { hp: 67, fuel: "benzin" },
      "1.0 TCe 90 HP": { hp: 90, fuel: "benzin" },
      "1.5 dCi 90 HP": { hp: 90, fuel: "dizel" },
    },
    Lodgy: {
      "1.2 TCe 115 HP": { hp: 115, fuel: "benzin" },
      "1.5 dCi 110 HP": { hp: 110, fuel: "dizel" },
      "1.6 105 HP": { hp: 105, fuel: "benzin" },
    },
    Dokker: {
      "1.5 dCi 90 HP": { hp: 90, fuel: "dizel" },
      "1.6 82 HP": { hp: 82, fuel: "benzin" },
    },
  },

  Fiat: {
    Egea: {
      "1.0 FireFly 100 HP": { hp: 100, fuel: "benzin" },
      "1.4 95 HP": { hp: 95, fuel: "benzin" },
      "1.3 Multijet 95 HP": { hp: 95, fuel: "dizel" },
      "1.6 Multijet 120 HP": { hp: 120, fuel: "dizel" },
      "1.6 E-Torq 110 HP": { hp: 110, fuel: "benzin" },
    },
    "500": {
      "1.2 69 HP": { hp: 69, fuel: "benzin" },
      "0.9 TwinAir 85 HP": { hp: 85, fuel: "benzin" },
      "0.9 TwinAir 105 HP": { hp: 105, fuel: "benzin" },
      "1.3 Multijet 95 HP": { hp: 95, fuel: "dizel" },
      "Abarth 1.4 T-Jet 180 HP": { hp: 180, fuel: "benzin" },
    },
    "500L": {
      "1.4 95 HP": { hp: 95, fuel: "benzin" },
      "1.3 Multijet 95 HP": { hp: 95, fuel: "dizel" },
      "1.6 Multijet 120 HP": { hp: 120, fuel: "dizel" },
      "1.4 T-Jet 140 HP": { hp: 140, fuel: "benzin" },
    },
    Doblo: {
      "1.3 Multijet 90 HP": { hp: 90, fuel: "dizel" },
      "1.6 Multijet 105 HP": { hp: 105, fuel: "dizel" },
      "2.0 Multijet 135 HP": { hp: 135, fuel: "dizel" },
      "1.4 77 HP": { hp: 77, fuel: "benzin" },
    },
    Ducato: {
      "2.3 Multijet 120 HP": { hp: 120, fuel: "dizel" },
      "2.3 Multijet 150 HP": { hp: 150, fuel: "dizel" },
      "2.3 Multijet 180 HP": { hp: 180, fuel: "dizel" },
    },
    Tipo: {
      "1.4 95 HP": { hp: 95, fuel: "benzin" },
      "1.6 110 HP": { hp: 110, fuel: "benzin" },
      "1.3 Multijet 95 HP": { hp: 95, fuel: "dizel" },
      "1.6 Multijet 120 HP": { hp: 120, fuel: "dizel" },
    },
    Fiorino: {
      "1.3 Multijet 80 HP": { hp: 80, fuel: "dizel" },
      "1.3 Multijet 95 HP": { hp: 95, fuel: "dizel" },
      "1.4 77 HP": { hp: 77, fuel: "benzin" },
    },
    Panda: {
      "1.2 69 HP": { hp: 69, fuel: "benzin" },
      "0.9 TwinAir 85 HP": { hp: 85, fuel: "benzin" },
      "1.3 Multijet 95 HP": { hp: 95, fuel: "dizel" },
    },
  },

  Ford: {
    Fiesta: {
      "1.0 EcoBoost 100 HP": { hp: 100, fuel: "benzin" },
      "1.0 EcoBoost 125 HP": { hp: 125, fuel: "benzin" },
      "1.5 TDCi 85 HP": { hp: 85, fuel: "dizel" },
      "1.5 TDCi 120 HP": { hp: 120, fuel: "dizel" },
      "ST 1.5 200 HP": { hp: 200, fuel: "benzin" },
    },
    Focus: {
      "1.0 EcoBoost 125 HP": { hp: 125, fuel: "benzin" },
      "1.5 EcoBoost 150 HP": { hp: 150, fuel: "benzin" },
      "1.5 EcoBoost 182 HP": { hp: 182, fuel: "benzin" },
      "1.5 TDCi 95 HP": { hp: 95, fuel: "dizel" },
      "1.5 TDCi 120 HP": { hp: 120, fuel: "dizel" },
      "2.0 TDCi 150 HP": { hp: 150, fuel: "dizel" },
      "ST 2.0 250 HP": { hp: 250, fuel: "benzin" },
    },
    Mondeo: {
      "1.5 EcoBoost 160 HP": { hp: 160, fuel: "benzin" },
      "2.0 TDCi 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 TDCi 180 HP": { hp: 180, fuel: "dizel" },
      "2.0 TDCi 210 HP": { hp: 210, fuel: "dizel" },
      "2.5 150 HP": { hp: 150, fuel: "benzin" },
    },
    Puma: {
      "1.0 EcoBoost 125 HP": { hp: 125, fuel: "benzin" },
      "1.0 EcoBoost 155 HP": { hp: 155, fuel: "benzin" },
      "1.5 EcoBlue 120 HP": { hp: 120, fuel: "dizel" },
    },
    Kuga: {
      "1.5 EcoBoost 150 HP": { hp: 150, fuel: "benzin" },
      "2.0 TDCi 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 TDCi 180 HP": { hp: 180, fuel: "dizel" },
      "2.5 Hybrid 190 HP": { hp: 190, fuel: "hybrid" },
    },
    EcoSport: {
      "1.0 EcoBoost 125 HP": { hp: 125, fuel: "benzin" },
      "1.5 TDCi 100 HP": { hp: 100, fuel: "dizel" },
      "1.5 110 HP": { hp: 110, fuel: "benzin" },
    },
    Ranger: {
      "2.0 EcoBlue 130 HP": { hp: 130, fuel: "dizel" },
      "2.0 EcoBlue 170 HP": { hp: 170, fuel: "dizel" },
      "2.0 EcoBlue 213 HP": { hp: 213, fuel: "dizel" },
      "Raptor 2.0 213 HP": { hp: 213, fuel: "dizel" },
    },
    Transit: {
      "2.0 EcoBlue 105 HP": { hp: 105, fuel: "dizel" },
      "2.0 EcoBlue 130 HP": { hp: 130, fuel: "dizel" },
      "2.0 EcoBlue 170 HP": { hp: 170, fuel: "dizel" },
      "2.0 EcoBlue 185 HP": { hp: 185, fuel: "dizel" },
    },
    "Transit Custom": {
      "2.0 EcoBlue 105 HP": { hp: 105, fuel: "dizel" },
      "2.0 EcoBlue 130 HP": { hp: 130, fuel: "dizel" },
      "2.0 EcoBlue 170 HP": { hp: 170, fuel: "dizel" },
    },
    "Transit Connect": {
      "1.5 TDCi 100 HP": { hp: 100, fuel: "dizel" },
      "1.5 TDCi 120 HP": { hp: 120, fuel: "dizel" },
    },
  },

  Honda: {
    Civic: {
      "1.0 VTEC Turbo 126 HP": { hp: 126, fuel: "benzin" },
      "1.5 VTEC Turbo 182 HP": { hp: 182, fuel: "benzin" },
      "1.6 i-DTEC 120 HP": { hp: 120, fuel: "dizel" },
      "2.0 i-VTEC 155 HP": { hp: 155, fuel: "benzin" },
      "Type R 2.0 320 HP": { hp: 320, fuel: "benzin" },
    },
    "CR-V": {
      "1.6 i-DTEC 120 HP": { hp: 120, fuel: "dizel" },
      "1.6 i-DTEC 160 HP": { hp: 160, fuel: "dizel" },
      "1.5 VTEC Turbo 193 HP": { hp: 193, fuel: "benzin" },
      "2.0 i-VTEC 155 HP": { hp: 155, fuel: "benzin" },
    },
    "HR-V": {
      "1.5 i-VTEC 130 HP": { hp: 130, fuel: "benzin" },
      "1.6 i-DTEC 120 HP": { hp: 120, fuel: "dizel" },
      "1.5 Hybrid 131 HP": { hp: 131, fuel: "hybrid" },
    },
    "City": {
      "1.5 i-VTEC 121 HP": { hp: 121, fuel: "benzin" },
    },
    Jazz: {
      "1.3 i-VTEC 102 HP": { hp: 102, fuel: "benzin" },
      "1.5 Hybrid 109 HP": { hp: 109, fuel: "hybrid" },
    },
    Accord: {
      "2.0 i-VTEC 156 HP": { hp: 156, fuel: "benzin" },
      "2.2 i-DTEC 150 HP": { hp: 150, fuel: "dizel" },
    },
  },

  Hyundai: {
    i10: {
      "1.0 67 HP": { hp: 67, fuel: "benzin" },
      "1.2 84 HP": { hp: 84, fuel: "benzin" },
    },
    i20: {
      "1.0 T-GDi 100 HP": { hp: 100, fuel: "benzin" },
      "1.0 T-GDi 120 HP": { hp: 120, fuel: "benzin" },
      "1.2 84 HP": { hp: 84, fuel: "benzin" },
      "1.1 CRDi 75 HP": { hp: 75, fuel: "dizel" },
      "1.4 CRDi 90 HP": { hp: 90, fuel: "dizel" },
    },
    i30: {
      "1.0 T-GDi 120 HP": { hp: 120, fuel: "benzin" },
      "1.4 T-GDi 140 HP": { hp: 140, fuel: "benzin" },
      "1.5 T-GDi 160 HP": { hp: 160, fuel: "benzin" },
      "1.6 CRDi 110 HP": { hp: 110, fuel: "dizel" },
      "1.6 CRDi 136 HP": { hp: 136, fuel: "dizel" },
      "N 2.0 T-GDi 250 HP": { hp: 250, fuel: "benzin" },
    },
    Elantra: {
      "1.6 132 HP": { hp: 132, fuel: "benzin" },
      "1.6 CRDi 136 HP": { hp: 136, fuel: "dizel" },
      "1.6 T-GDi 204 HP": { hp: 204, fuel: "benzin" },
    },
    Accent: {
      "1.4 100 HP": { hp: 100, fuel: "benzin" },
      "1.6 CRDi 90 HP": { hp: 90, fuel: "dizel" },
    },
    Tucson: {
      "1.6 CRDi 115 HP": { hp: 115, fuel: "dizel" },
      "1.6 CRDi 136 HP": { hp: 136, fuel: "dizel" },
      "2.0 CRDi 136 HP": { hp: 136, fuel: "dizel" },
      "2.0 CRDi 185 HP": { hp: 185, fuel: "dizel" },
      "1.6 T-GDi 177 HP": { hp: 177, fuel: "benzin" },
    },
    "Santa Fe": {
      "2.2 CRDi 200 HP": { hp: 200, fuel: "dizel" },
      "2.4 185 HP": { hp: 185, fuel: "benzin" },
      "2.0 T-GDi 232 HP": { hp: 232, fuel: "benzin" },
    },
    Bayon: {
      "1.0 T-GDi 100 HP": { hp: 100, fuel: "benzin" },
      "1.2 84 HP": { hp: 84, fuel: "benzin" },
    },
    Kona: {
      "1.0 T-GDi 120 HP": { hp: 120, fuel: "benzin" },
      "1.6 T-GDi 177 HP": { hp: 177, fuel: "benzin" },
      "1.6 CRDi 115 HP": { hp: 115, fuel: "dizel" },
    },
  },

  Jeep: {
    Renegade: {
      "1.3 Turbo 150 HP": { hp: 150, fuel: "benzin" },
      "1.3 Turbo 180 HP": { hp: 180, fuel: "benzin" },
      "1.6 Multijet 120 HP": { hp: 120, fuel: "dizel" },
      "2.0 Multijet 140 HP": { hp: 140, fuel: "dizel" },
      "2.0 Multijet 170 HP": { hp: 170, fuel: "dizel" },
    },
    Compass: {
      "1.3 Turbo 150 HP": { hp: 150, fuel: "benzin" },
      "1.6 Multijet 120 HP": { hp: 120, fuel: "dizel" },
      "2.0 Multijet 140 HP": { hp: 140, fuel: "dizel" },
      "2.0 Multijet 180 HP": { hp: 180, fuel: "dizel" },
    },
    "Grand Cherokee": {
      "3.0 CRD 250 HP": { hp: 250, fuel: "dizel" },
      "3.6 V6 286 HP": { hp: 286, fuel: "benzin" },
      "5.7 V8 352 HP": { hp: 352, fuel: "benzin" },
    },
    Wrangler: {
      "2.0 Turbo 272 HP": { hp: 272, fuel: "benzin" },
      "2.8 CRD 200 HP": { hp: 200, fuel: "dizel" },
    },
    Cherokee: {
      "2.0 Multijet 140 HP": { hp: 140, fuel: "dizel" },
      "2.0 Multijet 170 HP": { hp: 170, fuel: "dizel" },
      "2.4 177 HP": { hp: 177, fuel: "benzin" },
    },
  },

  Kia: {
    Picanto: {
      "1.0 67 HP": { hp: 67, fuel: "benzin" },
      "1.2 84 HP": { hp: 84, fuel: "benzin" },
    },
    Rio: {
      "1.2 84 HP": { hp: 84, fuel: "benzin" },
      "1.4 100 HP": { hp: 100, fuel: "benzin" },
      "1.4 CRDi 90 HP": { hp: 90, fuel: "dizel" },
    },
    Ceed: {
      "1.0 T-GDi 120 HP": { hp: 120, fuel: "benzin" },
      "1.4 T-GDi 140 HP": { hp: 140, fuel: "benzin" },
      "1.5 T-GDi 160 HP": { hp: 160, fuel: "benzin" },
      "1.6 CRDi 115 HP": { hp: 115, fuel: "dizel" },
      "1.6 CRDi 136 HP": { hp: 136, fuel: "dizel" },
      "GT 1.6 204 HP": { hp: 204, fuel: "benzin" },
    },
    Sportage: {
      "1.6 CRDi 115 HP": { hp: 115, fuel: "dizel" },
      "1.6 CRDi 136 HP": { hp: 136, fuel: "dizel" },
      "2.0 CRDi 136 HP": { hp: 136, fuel: "dizel" },
      "2.0 CRDi 184 HP": { hp: 184, fuel: "dizel" },
      "1.6 T-GDi 177 HP": { hp: 177, fuel: "benzin" },
    },
    Sorento: {
      "2.2 CRDi 200 HP": { hp: 200, fuel: "dizel" },
      "2.4 188 HP": { hp: 188, fuel: "benzin" },
    },
    Stonic: {
      "1.0 T-GDi 100 HP": { hp: 100, fuel: "benzin" },
      "1.2 84 HP": { hp: 84, fuel: "benzin" },
      "1.6 CRDi 110 HP": { hp: 110, fuel: "dizel" },
    },
    Niro: {
      "1.6 Hybrid 141 HP": { hp: 141, fuel: "hybrid" },
    },
  },

  "Land Rover": {
    "Discovery Sport": {
      "2.0 D 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 D 180 HP": { hp: 180, fuel: "dizel" },
      "2.0 D 240 HP": { hp: 240, fuel: "dizel" },
    },
    "Range Rover Evoque": {
      "2.0 D 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 D 180 HP": { hp: 180, fuel: "dizel" },
      "2.0 Si4 240 HP": { hp: 240, fuel: "benzin" },
    },
    "Range Rover Sport": {
      "3.0 SDV6 258 HP": { hp: 258, fuel: "dizel" },
      "3.0 SDV6 306 HP": { hp: 306, fuel: "dizel" },
      "5.0 V8 510 HP": { hp: 510, fuel: "benzin" },
    },
    Defender: {
      "2.0 D 200 HP": { hp: 200, fuel: "dizel" },
      "3.0 D 300 HP": { hp: 300, fuel: "dizel" },
      "3.0 P 400 HP": { hp: 400, fuel: "benzin" },
    },
    Freelander: {
      "2.2 SD4 190 HP": { hp: 190, fuel: "dizel" },
      "2.0 Si4 240 HP": { hp: 240, fuel: "benzin" },
    },
  },

  Mazda: {
    "Mazda2": {
      "1.5 Skyactiv-G 90 HP": { hp: 90, fuel: "benzin" },
      "1.5 Skyactiv-G 115 HP": { hp: 115, fuel: "benzin" },
      "1.5 Skyactiv-D 105 HP": { hp: 105, fuel: "dizel" },
    },
    "Mazda3": {
      "1.5 Skyactiv-G 100 HP": { hp: 100, fuel: "benzin" },
      "2.0 Skyactiv-G 165 HP": { hp: 165, fuel: "benzin" },
      "1.5 Skyactiv-D 150 HP": { hp: 150, fuel: "dizel" },
      "2.2 Skyactiv-D 184 HP": { hp: 184, fuel: "dizel" },
    },
    "Mazda6": {
      "2.0 Skyactiv-G 165 HP": { hp: 165, fuel: "benzin" },
      "2.5 Skyactiv-G 194 HP": { hp: 194, fuel: "benzin" },
      "2.2 Skyactiv-D 150 HP": { hp: 150, fuel: "dizel" },
      "2.2 Skyactiv-D 184 HP": { hp: 184, fuel: "dizel" },
    },
    "CX-3": {
      "1.5 Skyactiv-G 120 HP": { hp: 120, fuel: "benzin" },
      "1.5 Skyactiv-D 105 HP": { hp: 105, fuel: "dizel" },
    },
    "CX-5": {
      "2.0 Skyactiv-G 165 HP": { hp: 165, fuel: "benzin" },
      "2.5 Skyactiv-G 194 HP": { hp: 194, fuel: "benzin" },
      "2.2 Skyactiv-D 150 HP": { hp: 150, fuel: "dizel" },
      "2.2 Skyactiv-D 175 HP": { hp: 175, fuel: "dizel" },
    },
    "CX-30": {
      "2.0 Skyactiv-G 122 HP": { hp: 122, fuel: "benzin" },
      "2.0 Skyactiv-G 180 HP": { hp: 180, fuel: "benzin" },
      "1.8 Skyactiv-D 116 HP": { hp: 116, fuel: "dizel" },
    },
  },

  Mercedes: {
    "A Serisi": {
      "A 180d 116 HP": { hp: 116, fuel: "dizel" },
      "A 200d 150 HP": { hp: 150, fuel: "dizel" },
      "A 180 136 HP": { hp: 136, fuel: "benzin" },
      "A 200 163 HP": { hp: 163, fuel: "benzin" },
      "A 250 224 HP": { hp: 224, fuel: "benzin" },
      "A 45 AMG 421 HP": { hp: 421, fuel: "benzin" },
    },
    "B Serisi": {
      "B 180d 116 HP": { hp: 116, fuel: "dizel" },
      "B 200d 150 HP": { hp: 150, fuel: "dizel" },
      "B 180 136 HP": { hp: 136, fuel: "benzin" },
      "B 200 163 HP": { hp: 163, fuel: "benzin" },
    },
    "C Serisi": {
      "C 200d 160 HP": { hp: 160, fuel: "dizel" },
      "C 220d 194 HP": { hp: 194, fuel: "dizel" },
      "C 300d 245 HP": { hp: 245, fuel: "dizel" },
      "C 180 156 HP": { hp: 156, fuel: "benzin" },
      "C 200 184 HP": { hp: 184, fuel: "benzin" },
      "C 300 258 HP": { hp: 258, fuel: "benzin" },
      "C 43 AMG 390 HP": { hp: 390, fuel: "benzin" },
      "C 63 AMG 476 HP": { hp: 476, fuel: "benzin" },
    },
    "CLA": {
      "CLA 200d 150 HP": { hp: 150, fuel: "dizel" },
      "CLA 180 136 HP": { hp: 136, fuel: "benzin" },
      "CLA 200 163 HP": { hp: 163, fuel: "benzin" },
      "CLA 250 224 HP": { hp: 224, fuel: "benzin" },
      "CLA 45 AMG 421 HP": { hp: 421, fuel: "benzin" },
    },
    "E Serisi": {
      "E 200d 160 HP": { hp: 160, fuel: "dizel" },
      "E 220d 194 HP": { hp: 194, fuel: "dizel" },
      "E 300d 245 HP": { hp: 245, fuel: "dizel" },
      "E 350d 286 HP": { hp: 286, fuel: "dizel" },
      "E 200 197 HP": { hp: 197, fuel: "benzin" },
      "E 300 258 HP": { hp: 258, fuel: "benzin" },
      "E 53 AMG 435 HP": { hp: 435, fuel: "benzin" },
      "E 63 AMG 571 HP": { hp: 571, fuel: "benzin" },
    },
    "GLA": {
      "GLA 200d 150 HP": { hp: 150, fuel: "dizel" },
      "GLA 180 136 HP": { hp: 136, fuel: "benzin" },
      "GLA 250 224 HP": { hp: 224, fuel: "benzin" },
      "GLA 45 AMG 421 HP": { hp: 421, fuel: "benzin" },
    },
    "GLC": {
      "GLC 220d 194 HP": { hp: 194, fuel: "dizel" },
      "GLC 300d 245 HP": { hp: 245, fuel: "dizel" },
      "GLC 300 258 HP": { hp: 258, fuel: "benzin" },
      "GLC 43 AMG 390 HP": { hp: 390, fuel: "benzin" },
      "GLC 63 AMG 476 HP": { hp: 476, fuel: "benzin" },
    },
    "GLE": {
      "GLE 300d 245 HP": { hp: 245, fuel: "dizel" },
      "GLE 400d 330 HP": { hp: 330, fuel: "dizel" },
      "GLE 450 367 HP": { hp: 367, fuel: "benzin" },
    },
    "GLS": {
      "GLS 400d 330 HP": { hp: 330, fuel: "dizel" },
    },
    "S Serisi": {
      "S 350d 286 HP": { hp: 286, fuel: "dizel" },
      "S 400d 330 HP": { hp: 330, fuel: "dizel" },
      "S 500 435 HP": { hp: 435, fuel: "benzin" },
    },
    Sprinter: {
      "211 CDI 114 HP": { hp: 114, fuel: "dizel" },
      "314 CDI 143 HP": { hp: 143, fuel: "dizel" },
      "316 CDI 163 HP": { hp: 163, fuel: "dizel" },
      "319 CDI 190 HP": { hp: 190, fuel: "dizel" },
    },
    Vito: {
      "114 CDI 136 HP": { hp: 136, fuel: "dizel" },
      "116 CDI 163 HP": { hp: 163, fuel: "dizel" },
      "119 CDI 190 HP": { hp: 190, fuel: "dizel" },
    },
    Viano: {
      "220 CDI 163 HP": { hp: 163, fuel: "dizel" },
      "250 CDI 190 HP": { hp: 190, fuel: "dizel" },
    },
  },

  Mitsubishi: {
    ASX: {
      "1.6 DI-D 114 HP": { hp: 114, fuel: "dizel" },
      "1.6 117 HP": { hp: 117, fuel: "benzin" },
      "2.0 150 HP": { hp: 150, fuel: "benzin" },
    },
    L200: {
      "2.2 DI-D 150 HP": { hp: 150, fuel: "dizel" },
      "2.2 DI-D 154 HP": { hp: 154, fuel: "dizel" },
      "2.4 132 HP": { hp: 132, fuel: "benzin" },
    },
    Outlander: {
      "2.0 150 HP": { hp: 150, fuel: "benzin" },
      "2.2 DI-D 150 HP": { hp: 150, fuel: "dizel" },
      "2.4 PHEV 121 HP": { hp: 121, fuel: "hybrid" },
    },
    Colt: {
      "1.1 75 HP": { hp: 75, fuel: "benzin" },
      "1.3 95 HP": { hp: 95, fuel: "benzin" },
      "1.5 DI-D 95 HP": { hp: 95, fuel: "dizel" },
    },
    "Space Star": {
      "1.0 71 HP": { hp: 71, fuel: "benzin" },
      "1.2 80 HP": { hp: 80, fuel: "benzin" },
    },
  },

  Nissan: {
    Micra: {
      "1.0 73 HP": { hp: 73, fuel: "benzin" },
      "0.9 90 HP": { hp: 90, fuel: "benzin" },
      "1.5 dCi 90 HP": { hp: 90, fuel: "dizel" },
    },
    Qashqai: {
      "1.3 DIG-T 140 HP": { hp: 140, fuel: "benzin" },
      "1.3 DIG-T 158 HP": { hp: 158, fuel: "benzin" },
      "1.5 dCi 110 HP": { hp: 110, fuel: "dizel" },
      "1.7 dCi 150 HP": { hp: 150, fuel: "dizel" },
    },
    "X-Trail": {
      "1.3 DIG-T 160 HP": { hp: 160, fuel: "benzin" },
      "1.7 dCi 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 dCi 177 HP": { hp: 177, fuel: "dizel" },
    },
    Juke: {
      "1.0 DIG-T 117 HP": { hp: 117, fuel: "benzin" },
      "1.5 dCi 110 HP": { hp: 110, fuel: "dizel" },
      "1.6 94 HP": { hp: 94, fuel: "benzin" },
    },
    Navara: {
      "2.3 dCi 163 HP": { hp: 163, fuel: "dizel" },
      "2.3 dCi 190 HP": { hp: 190, fuel: "dizel" },
    },
    Leaf: {
      "40 kWh 150 HP": { hp: 150, fuel: "elektrik" },
    },
    Almera: {
      "1.5 102 HP": { hp: 102, fuel: "benzin" },
      "1.5 dCi 82 HP": { hp: 82, fuel: "dizel" },
    },
  },

  Opel: {
    Corsa: {
      "1.2 75 HP": { hp: 75, fuel: "benzin" },
      "1.2 Turbo 100 HP": { hp: 100, fuel: "benzin" },
      "1.2 Turbo 130 HP": { hp: 130, fuel: "benzin" },
      "1.3 CDTI 75 HP": { hp: 75, fuel: "dizel" },
      "1.3 CDTI 95 HP": { hp: 95, fuel: "dizel" },
      "OPC 1.6 207 HP": { hp: 207, fuel: "benzin" },
    },
    Astra: {
      "1.0 Turbo 105 HP": { hp: 105, fuel: "benzin" },
      "1.4 Turbo 125 HP": { hp: 125, fuel: "benzin" },
      "1.4 Turbo 150 HP": { hp: 150, fuel: "benzin" },
      "1.6 CDTI 110 HP": { hp: 110, fuel: "dizel" },
      "1.6 CDTI 136 HP": { hp: 136, fuel: "dizel" },
      "2.0 CDTI 165 HP": { hp: 165, fuel: "dizel" },
      "OPC 2.0 280 HP": { hp: 280, fuel: "benzin" },
    },
    Insignia: {
      "1.5 Turbo 140 HP": { hp: 140, fuel: "benzin" },
      "2.0 Turbo 200 HP": { hp: 200, fuel: "benzin" },
      "1.6 CDTI 110 HP": { hp: 110, fuel: "dizel" },
      "2.0 CDTI 130 HP": { hp: 130, fuel: "dizel" },
      "2.0 CDTI 170 HP": { hp: 170, fuel: "dizel" },
      "GSi 2.0 260 HP": { hp: 260, fuel: "benzin" },
    },
    Mokka: {
      "1.2 Turbo 130 HP": { hp: 130, fuel: "benzin" },
      "1.4 Turbo 140 HP": { hp: 140, fuel: "benzin" },
      "1.6 CDTI 110 HP": { hp: 110, fuel: "dizel" },
      "1.6 CDTI 136 HP": { hp: 136, fuel: "dizel" },
    },
    Zafira: {
      "1.4 Turbo 140 HP": { hp: 140, fuel: "benzin" },
      "1.6 CDTI 134 HP": { hp: 134, fuel: "dizel" },
      "2.0 CDTI 170 HP": { hp: 170, fuel: "dizel" },
    },
    Crossland: {
      "1.2 83 HP": { hp: 83, fuel: "benzin" },
      "1.2 Turbo 110 HP": { hp: 110, fuel: "benzin" },
      "1.5 Diesel 102 HP": { hp: 102, fuel: "dizel" },
    },
    Grandland: {
      "1.2 Turbo 130 HP": { hp: 130, fuel: "benzin" },
      "1.5 Diesel 120 HP": { hp: 120, fuel: "dizel" },
      "2.0 Diesel 177 HP": { hp: 177, fuel: "dizel" },
    },
    Vivaro: {
      "1.6 CDTI 120 HP": { hp: 120, fuel: "dizel" },
      "2.0 CDTI 150 HP": { hp: 150, fuel: "dizel" },
    },
  },

  Peugeot: {
    "208": {
      "1.2 PureTech 75 HP": { hp: 75, fuel: "benzin" },
      "1.2 PureTech 100 HP": { hp: 100, fuel: "benzin" },
      "1.2 PureTech 130 HP": { hp: 130, fuel: "benzin" },
      "1.5 BlueHDi 100 HP": { hp: 100, fuel: "dizel" },
      "GTi 1.6 208 HP": { hp: 208, fuel: "benzin" },
    },
    "308": {
      "1.2 PureTech 110 HP": { hp: 110, fuel: "benzin" },
      "1.2 PureTech 130 HP": { hp: 130, fuel: "benzin" },
      "1.5 BlueHDi 102 HP": { hp: 102, fuel: "dizel" },
      "1.5 BlueHDi 130 HP": { hp: 130, fuel: "dizel" },
      "2.0 BlueHDi 150 HP": { hp: 150, fuel: "dizel" },
      "GTi 1.6 270 HP": { hp: 270, fuel: "benzin" },
    },
    "3008": {
      "1.2 PureTech 130 HP": { hp: 130, fuel: "benzin" },
      "1.6 PureTech 180 HP": { hp: 180, fuel: "benzin" },
      "1.5 BlueHDi 130 HP": { hp: 130, fuel: "dizel" },
      "2.0 BlueHDi 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 BlueHDi 180 HP": { hp: 180, fuel: "dizel" },
    },
    "5008": {
      "1.2 PureTech 130 HP": { hp: 130, fuel: "benzin" },
      "1.5 BlueHDi 130 HP": { hp: 130, fuel: "dizel" },
      "2.0 BlueHDi 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 BlueHDi 180 HP": { hp: 180, fuel: "dizel" },
    },
    "2008": {
      "1.2 PureTech 100 HP": { hp: 100, fuel: "benzin" },
      "1.2 PureTech 130 HP": { hp: 130, fuel: "benzin" },
      "1.5 BlueHDi 100 HP": { hp: 100, fuel: "dizel" },
    },
    Boxer: {
      "2.0 BlueHDi 110 HP": { hp: 110, fuel: "dizel" },
      "2.0 BlueHDi 130 HP": { hp: 130, fuel: "dizel" },
      "2.2 BlueHDi 165 HP": { hp: 165, fuel: "dizel" },
    },
    Expert: {
      "1.6 HDi 90 HP": { hp: 90, fuel: "dizel" },
      "2.0 BlueHDi 122 HP": { hp: 122, fuel: "dizel" },
      "2.0 BlueHDi 150 HP": { hp: 150, fuel: "dizel" },
    },
    Partner: {
      "1.6 HDi 75 HP": { hp: 75, fuel: "dizel" },
      "1.6 BlueHDi 100 HP": { hp: 100, fuel: "dizel" },
      "1.2 PureTech 110 HP": { hp: 110, fuel: "benzin" },
    },
  },

  Renault: {
    Clio: {
      "1.0 TCe 90 HP": { hp: 90, fuel: "benzin" },
      "1.0 TCe 100 HP": { hp: 100, fuel: "benzin" },
      "1.3 TCe 140 HP": { hp: 140, fuel: "benzin" },
      "1.5 dCi 85 HP": { hp: 85, fuel: "dizel" },
      "1.5 dCi 110 HP": { hp: 110, fuel: "dizel" },
      "RS 1.6 220 HP": { hp: 220, fuel: "benzin" },
    },
    Megane: {
      "1.3 TCe 115 HP": { hp: 115, fuel: "benzin" },
      "1.3 TCe 140 HP": { hp: 140, fuel: "benzin" },
      "1.5 dCi 95 HP": { hp: 95, fuel: "dizel" },
      "1.5 dCi 110 HP": { hp: 110, fuel: "dizel" },
      "1.7 dCi 150 HP": { hp: 150, fuel: "dizel" },
      "RS 1.8 280 HP": { hp: 280, fuel: "benzin" },
    },
    Talisman: {
      "1.5 dCi 110 HP": { hp: 110, fuel: "dizel" },
      "1.6 dCi 160 HP": { hp: 160, fuel: "dizel" },
      "1.8 TCe 225 HP": { hp: 225, fuel: "benzin" },
    },
    Kadjar: {
      "1.3 TCe 140 HP": { hp: 140, fuel: "benzin" },
      "1.5 dCi 115 HP": { hp: 115, fuel: "dizel" },
      "1.7 dCi 150 HP": { hp: 150, fuel: "dizel" },
    },
    Captur: {
      "1.0 TCe 90 HP": { hp: 90, fuel: "benzin" },
      "1.3 TCe 130 HP": { hp: 130, fuel: "benzin" },
      "1.5 dCi 90 HP": { hp: 90, fuel: "dizel" },
      "1.5 dCi 115 HP": { hp: 115, fuel: "dizel" },
    },
    Trafic: {
      "1.6 dCi 115 HP": { hp: 115, fuel: "dizel" },
      "1.6 dCi 125 HP": { hp: 125, fuel: "dizel" },
      "2.0 dCi 145 HP": { hp: 145, fuel: "dizel" },
      "2.0 dCi 170 HP": { hp: 170, fuel: "dizel" },
    },
    Master: {
      "2.3 dCi 135 HP": { hp: 135, fuel: "dizel" },
      "2.3 dCi 150 HP": { hp: 150, fuel: "dizel" },
      "2.3 dCi 165 HP": { hp: 165, fuel: "dizel" },
    },
    Symbol: {
      "1.5 dCi 90 HP": { hp: 90, fuel: "dizel" },
      "1.2 73 HP": { hp: 73, fuel: "benzin" },
    },
    Taliant: {
      "1.0 SCe 65 HP": { hp: 65, fuel: "benzin" },
      "1.0 TCe 90 HP": { hp: 90, fuel: "benzin" },
    },
  },

  Seat: {
    Ibiza: {
      "1.0 TSI 95 HP": { hp: 95, fuel: "benzin" },
      "1.0 TSI 115 HP": { hp: 115, fuel: "benzin" },
      "1.6 TDI 95 HP": { hp: 95, fuel: "dizel" },
      "1.6 TDI 115 HP": { hp: 115, fuel: "dizel" },
    },
    Leon: {
      "1.4 TSI 125 HP": { hp: 125, fuel: "benzin" },
      "1.5 TSI 150 HP": { hp: 150, fuel: "benzin" },
      "1.6 TDI 115 HP": { hp: 115, fuel: "dizel" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
      "FR 2.0 TSI 190 HP": { hp: 190, fuel: "benzin" },
      "Cupra 2.0 TSI 300 HP": { hp: 300, fuel: "benzin" },
    },
    Ateca: {
      "1.5 TSI 150 HP": { hp: 150, fuel: "benzin" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 TDI 190 HP": { hp: 190, fuel: "dizel" },
      "2.0 TSI 190 HP": { hp: 190, fuel: "benzin" },
    },
    Arona: {
      "1.0 TSI 95 HP": { hp: 95, fuel: "benzin" },
      "1.0 TSI 115 HP": { hp: 115, fuel: "benzin" },
      "1.6 TDI 115 HP": { hp: 115, fuel: "dizel" },
    },
    Toledo: {
      "1.4 TSI 125 HP": { hp: 125, fuel: "benzin" },
      "1.6 TDI 115 HP": { hp: 115, fuel: "dizel" },
    },
  },

  Skoda: {
    Fabia: {
      "1.0 TSI 95 HP": { hp: 95, fuel: "benzin" },
      "1.0 TSI 110 HP": { hp: 110, fuel: "benzin" },
      "1.4 TDI 90 HP": { hp: 90, fuel: "dizel" },
    },
    Octavia: {
      "1.4 TSI 150 HP": { hp: 150, fuel: "benzin" },
      "1.5 TSI 150 HP": { hp: 150, fuel: "benzin" },
      "1.6 TDI 115 HP": { hp: 115, fuel: "dizel" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 TDI 190 HP": { hp: 190, fuel: "dizel" },
      "RS 2.0 TSI 245 HP": { hp: 245, fuel: "benzin" },
    },
    Superb: {
      "1.5 TSI 150 HP": { hp: 150, fuel: "benzin" },
      "2.0 TSI 190 HP": { hp: 190, fuel: "benzin" },
      "2.0 TSI 280 HP": { hp: 280, fuel: "benzin" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 TDI 190 HP": { hp: 190, fuel: "dizel" },
    },
    Kodiaq: {
      "1.5 TSI 150 HP": { hp: 150, fuel: "benzin" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 TDI 190 HP": { hp: 190, fuel: "dizel" },
      "2.0 TSI 190 HP": { hp: 190, fuel: "benzin" },
      "RS 2.0 TSI 245 HP": { hp: 245, fuel: "benzin" },
    },
    Karoq: {
      "1.5 TSI 150 HP": { hp: 150, fuel: "benzin" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 TDI 190 HP": { hp: 190, fuel: "dizel" },
    },
    Scala: {
      "1.0 TSI 95 HP": { hp: 95, fuel: "benzin" },
      "1.5 TSI 150 HP": { hp: 150, fuel: "benzin" },
      "1.6 TDI 115 HP": { hp: 115, fuel: "dizel" },
    },
    Kamiq: {
      "1.0 TSI 95 HP": { hp: 95, fuel: "benzin" },
      "1.5 TSI 150 HP": { hp: 150, fuel: "benzin" },
    },
  },

  Subaru: {
    Impreza: {
      "1.6 114 HP": { hp: 114, fuel: "benzin" },
      "2.0 156 HP": { hp: 156, fuel: "benzin" },
      "WRX 2.0 268 HP": { hp: 268, fuel: "benzin" },
    },
    XV: {
      "1.6 114 HP": { hp: 114, fuel: "benzin" },
      "2.0 156 HP": { hp: 156, fuel: "benzin" },
      "2.0 D 150 HP": { hp: 150, fuel: "dizel" },
    },
    Forester: {
      "2.0 150 HP": { hp: 150, fuel: "benzin" },
      "2.0 D 147 HP": { hp: 147, fuel: "dizel" },
    },
    Outback: {
      "2.5 175 HP": { hp: 175, fuel: "benzin" },
      "2.0 D 150 HP": { hp: 150, fuel: "dizel" },
    },
  },

  Suzuki: {
    Swift: {
      "1.2 83 HP": { hp: 83, fuel: "benzin" },
      "1.0 Boosterjet 111 HP": { hp: 111, fuel: "benzin" },
      "1.2 Hybrid 83 HP": { hp: 83, fuel: "hybrid" },
      "1.3 DDiS 75 HP": { hp: 75, fuel: "dizel" },
      "Sport 1.4 140 HP": { hp: 140, fuel: "benzin" },
    },
    Vitara: {
      "1.4 Boosterjet 140 HP": { hp: 140, fuel: "benzin" },
      "1.6 120 HP": { hp: 120, fuel: "benzin" },
      "1.6 DDiS 120 HP": { hp: 120, fuel: "dizel" },
    },
    "S-Cross": {
      "1.4 Boosterjet 140 HP": { hp: 140, fuel: "benzin" },
      "1.6 120 HP": { hp: 120, fuel: "benzin" },
      "1.6 DDiS 120 HP": { hp: 120, fuel: "dizel" },
    },
    Baleno: {
      "1.0 Boosterjet 111 HP": { hp: 111, fuel: "benzin" },
      "1.4 91 HP": { hp: 91, fuel: "benzin" },
      "1.3 DDiS 90 HP": { hp: 90, fuel: "dizel" },
    },
    Ignis: {
      "1.2 83 HP": { hp: 83, fuel: "benzin" },
      "1.2 Hybrid 83 HP": { hp: 83, fuel: "hybrid" },
    },
  },

  Toyota: {
    Corolla: {
      "1.0 72 HP": { hp: 72, fuel: "benzin" },
      "1.33 99 HP": { hp: 99, fuel: "benzin" },
      "1.6 132 HP": { hp: 132, fuel: "benzin" },
      "1.4 D-4D 90 HP": { hp: 90, fuel: "dizel" },
      "2.0 D-4D 116 HP": { hp: 116, fuel: "dizel" },
      "1.8 Hybrid 122 HP": { hp: 122, fuel: "hybrid" },
      "2.0 Hybrid 152 HP": { hp: 152, fuel: "hybrid" },
    },
    "C-HR": {
      "1.2 116 HP": { hp: 116, fuel: "benzin" },
      "1.8 Hybrid 122 HP": { hp: 122, fuel: "hybrid" },
      "2.0 Hybrid 152 HP": { hp: 152, fuel: "hybrid" },
    },
    RAV4: {
      "2.0 150 HP": { hp: 150, fuel: "benzin" },
      "2.0 D-4D 124 HP": { hp: 124, fuel: "dizel" },
      "2.2 D-4D 150 HP": { hp: 150, fuel: "dizel" },
      "2.5 Hybrid 218 HP": { hp: 218, fuel: "hybrid" },
    },
    HiLux: {
      "2.4 D-4D 150 HP": { hp: 150, fuel: "dizel" },
      "2.8 D-4D 204 HP": { hp: 204, fuel: "dizel" },
    },
    Proace: {
      "1.6 D 90 HP": { hp: 90, fuel: "dizel" },
      "2.0 D 122 HP": { hp: 122, fuel: "dizel" },
      "2.0 D 150 HP": { hp: 150, fuel: "dizel" },
    },
    Yaris: {
      "1.0 72 HP": { hp: 72, fuel: "benzin" },
      "1.5 111 HP": { hp: 111, fuel: "benzin" },
      "1.5 Hybrid 100 HP": { hp: 100, fuel: "hybrid" },
    },
    Auris: {
      "1.33 99 HP": { hp: 99, fuel: "benzin" },
      "1.6 132 HP": { hp: 132, fuel: "benzin" },
      "1.4 D-4D 90 HP": { hp: 90, fuel: "dizel" },
      "1.8 Hybrid 136 HP": { hp: 136, fuel: "hybrid" },
    },
    Avensis: {
      "1.6 132 HP": { hp: 132, fuel: "benzin" },
      "1.8 147 HP": { hp: 147, fuel: "benzin" },
      "2.0 D-4D 124 HP": { hp: 124, fuel: "dizel" },
      "2.2 D-4D 150 HP": { hp: 150, fuel: "dizel" },
    },
  },

  Volkswagen: {
    Polo: {
      "1.0 65 HP": { hp: 65, fuel: "benzin" },
      "1.0 TSI 95 HP": { hp: 95, fuel: "benzin" },
      "1.0 TSI 110 HP": { hp: 110, fuel: "benzin" },
      "1.4 TDI 90 HP": { hp: 90, fuel: "dizel" },
      "GTI 2.0 TSI 207 HP": { hp: 207, fuel: "benzin" },
    },
    Golf: {
      "1.0 TSI 110 HP": { hp: 110, fuel: "benzin" },
      "1.4 TSI 125 HP": { hp: 125, fuel: "benzin" },
      "1.5 TSI 130 HP": { hp: 130, fuel: "benzin" },
      "1.5 TSI 150 HP": { hp: 150, fuel: "benzin" },
      "1.6 TDI 115 HP": { hp: 115, fuel: "dizel" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
      "GTI 2.0 TSI 245 HP": { hp: 245, fuel: "benzin" },
      "R 2.0 TSI 320 HP": { hp: 320, fuel: "benzin" },
    },
    Jetta: {
      "1.4 TSI 125 HP": { hp: 125, fuel: "benzin" },
      "1.5 TSI 150 HP": { hp: 150, fuel: "benzin" },
      "1.6 TDI 110 HP": { hp: 110, fuel: "dizel" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
    },
    Passat: {
      "1.4 TSI 125 HP": { hp: 125, fuel: "benzin" },
      "1.5 TSI 150 HP": { hp: 150, fuel: "benzin" },
      "2.0 TSI 190 HP": { hp: 190, fuel: "benzin" },
      "2.0 TSI 280 HP": { hp: 280, fuel: "benzin" },
      "1.6 TDI 120 HP": { hp: 120, fuel: "dizel" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 TDI 190 HP": { hp: 190, fuel: "dizel" },
    },
    Tiguan: {
      "1.4 TSI 150 HP": { hp: 150, fuel: "benzin" },
      "1.5 TSI 150 HP": { hp: 150, fuel: "benzin" },
      "2.0 TSI 190 HP": { hp: 190, fuel: "benzin" },
      "2.0 TSI 240 HP": { hp: 240, fuel: "benzin" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 TDI 190 HP": { hp: 190, fuel: "dizel" },
      "R 2.0 TSI 320 HP": { hp: 320, fuel: "benzin" },
    },
    Touareg: {
      "3.0 TDI 231 HP": { hp: 231, fuel: "dizel" },
      "3.0 TDI 286 HP": { hp: 286, fuel: "dizel" },
      "3.0 TSI 340 HP": { hp: 340, fuel: "benzin" },
    },
    "T-Roc": {
      "1.0 TSI 110 HP": { hp: 110, fuel: "benzin" },
      "1.5 TSI 150 HP": { hp: 150, fuel: "benzin" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
      "R 2.0 TSI 300 HP": { hp: 300, fuel: "benzin" },
    },
    Taigo: {
      "1.0 TSI 95 HP": { hp: 95, fuel: "benzin" },
      "1.5 TSI 150 HP": { hp: 150, fuel: "benzin" },
    },
    "T-Cross": {
      "1.0 TSI 95 HP": { hp: 95, fuel: "benzin" },
      "1.0 TSI 110 HP": { hp: 110, fuel: "benzin" },
    },
    Caddy: {
      "1.6 TDI 102 HP": { hp: 102, fuel: "dizel" },
      "2.0 TDI 122 HP": { hp: 122, fuel: "dizel" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
    },
    Transporter: {
      "2.0 TDI 102 HP": { hp: 102, fuel: "dizel" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 TDI 204 HP": { hp: 204, fuel: "dizel" },
    },
    Crafter: {
      "2.0 TDI 102 HP": { hp: 102, fuel: "dizel" },
      "2.0 TDI 140 HP": { hp: 140, fuel: "dizel" },
      "2.0 TDI 177 HP": { hp: 177, fuel: "dizel" },
    },
    Amarok: {
      "2.0 TDI 163 HP": { hp: 163, fuel: "dizel" },
      "3.0 TDI 224 HP": { hp: 224, fuel: "dizel" },
      "3.0 TDI 258 HP": { hp: 258, fuel: "dizel" },
    },
    Arteon: {
      "1.5 TSI 150 HP": { hp: 150, fuel: "benzin" },
      "2.0 TSI 190 HP": { hp: 190, fuel: "benzin" },
      "2.0 TDI 150 HP": { hp: 150, fuel: "dizel" },
      "2.0 TDI 200 HP": { hp: 200, fuel: "dizel" },
    },
  },

  Volvo: {
    "V40": {
      "D2 120 HP": { hp: 120, fuel: "dizel" },
      "D3 150 HP": { hp: 150, fuel: "dizel" },
      "D4 190 HP": { hp: 190, fuel: "dizel" },
      "T2 122 HP": { hp: 122, fuel: "benzin" },
      "T3 152 HP": { hp: 152, fuel: "benzin" },
      "T5 245 HP": { hp: 245, fuel: "benzin" },
    },
    "S60": {
      "D4 190 HP": { hp: 190, fuel: "dizel" },
      "T4 190 HP": { hp: 190, fuel: "benzin" },
      "T5 254 HP": { hp: 254, fuel: "benzin" },
      "T8 390 HP": { hp: 390, fuel: "hybrid" },
    },
    "V60": {
      "D4 190 HP": { hp: 190, fuel: "dizel" },
      "T4 190 HP": { hp: 190, fuel: "benzin" },
      "T5 254 HP": { hp: 254, fuel: "benzin" },
      "T8 390 HP": { hp: 390, fuel: "hybrid" },
    },
    "XC40": {
      "D4 190 HP": { hp: 190, fuel: "dizel" },
      "T3 163 HP": { hp: 163, fuel: "benzin" },
      "T4 197 HP": { hp: 197, fuel: "benzin" },
      "T5 247 HP": { hp: 247, fuel: "benzin" },
    },
    "XC60": {
      "D4 190 HP": { hp: 190, fuel: "dizel" },
      "D5 235 HP": { hp: 235, fuel: "dizel" },
      "T5 254 HP": { hp: 254, fuel: "benzin" },
      "T6 320 HP": { hp: 320, fuel: "benzin" },
      "T8 390 HP": { hp: 390, fuel: "hybrid" },
    },
    "XC90": {
      "D5 235 HP": { hp: 235, fuel: "dizel" },
      "T5 254 HP": { hp: 254, fuel: "benzin" },
      "T6 320 HP": { hp: 320, fuel: "benzin" },
      "T8 390 HP": { hp: 390, fuel: "hybrid" },
    },
    "S90": {
      "D4 190 HP": { hp: 190, fuel: "dizel" },
      "T5 254 HP": { hp: 254, fuel: "benzin" },
      "T8 390 HP": { hp: 390, fuel: "hybrid" },
    },
    "C30": {
      "1.6 D 109 HP": { hp: 109, fuel: "dizel" },
      "2.0 D 136 HP": { hp: 136, fuel: "dizel" },
      "2.4 D 180 HP": { hp: 180, fuel: "dizel" },
      "T5 227 HP": { hp: 227, fuel: "benzin" },
    },
  },
};

// Stage 1 güç artışı — aracın beygirine göre net HP kazancı.
// Düşük beygirli araçlar 25 HP, yüksek beygirli araçlar 30 HP civarı kazanır.
// Yakıt tipine göre küçük varyasyon:
//   - dizel: 26-30 HP (turbo dizel en iyi yanıt verir)
//   - benzin: 25-28 HP
//   - hybrid: 20-24 HP (elektrik motoru zaten destekler)
//   - elektrik: yazılım yapılmaz (0)
export function calcStage1(hp: number, fuel: Fuel): { gain: number; after: number; pct: number } {
  if (fuel === "elektrik") {
    return { gain: 0, after: hp, pct: 0 };
  }
  let gain: number;
  if (fuel === "dizel") {
    gain = hp <= 100 ? 26 : hp <= 150 ? 28 : hp <= 200 ? 30 : 32;
  } else if (fuel === "benzin") {
    gain = hp <= 100 ? 25 : hp <= 150 ? 27 : hp <= 200 ? 28 : 30;
  } else {
    gain = hp <= 120 ? 20 : hp <= 180 ? 22 : 24;
  }
  const pct = Math.round((gain / hp) * 100);
  return { gain, after: hp + gain, pct };
}

export const BRANDS = Object.keys(CAR_DATABASE).sort((a, b) => a.localeCompare(b, "tr"));
