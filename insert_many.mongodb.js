const database ='BD3-ATV2-GEOVANNA';
const collection ='bd3-atv2-produtos';
use(database);
db[collection].insertMany(
    
    [
      {
        "nome": "Smartphone X1",
        "valor": 1599,
        "quantidadeEmEstoque": 30,
        "fabricante": "TechBrand",
        "categoria": "Eletrônicos",
        "descricao": "Smartphone com câmera de alta resolução."
      },
      {
        "nome": "Notebook Pro 15",
        "valor": 4999,
        "quantidadeEmEstoque": 15,
        "fabricante": "LaptopCo",
        "categoria": "Computadores",
        "descricao": "Notebook potente para gamers e profissionais."
      },
      {
        "nome": "Fritadeira Sem Óleo",
        "valor": 299,
        "quantidadeEmEstoque": 50,
        "fabricante": "Cozinha Saudável",
        "categoria": "Eletrodomésticos",
        "descricao": "Fritadeira que cozinha de forma saudável."
      },
      {
        "nome": "Cadeira Ergônomica",
        "valor": 599,
        "quantidadeEmEstoque": 25,
        "fabricante": "Conforto Móveis",
        "categoria": "Móveis",
        "descricao": "Cadeira ergonômica ideal para o escritório."
      },
      {
        "nome": "Smart TV 4K 55\"",
        "valor": 3499,
        "quantidadeEmEstoque": 20,
        "fabricante": "VisionTech",
        "categoria": "Eletrônicos",
        "descricao": "Televisão com qualidade de imagem 4K."
      },
      {
        "nome": "Geladeira Inox",
        "valor": 2899,
        "quantidadeEmEstoque": 10,
        "fabricante": "FrioEletro",
        "categoria": "Eletrodomésticos",
        "descricao": "Geladeira com design moderno e eficiente."
      },
      {
        "nome": "Mouse Gamer RGB",
        "valor": 149,
        "quantidadeEmEstoque": 100,
        "fabricante": "GamerZone",
        "categoria": "Acessórios",
        "descricao": "Mouse gamer com iluminação RGB."
      },
      {
        "nome": "Teclado Mecânico",
        "valor": 399,
        "quantidadeEmEstoque": 60,
        "fabricante": "TechKeys",
        "categoria": "Acessórios",
        "descricao": "Teclado mecânico com switches personalizados."
      },
      {
        "nome": "Caixa de Som Bluetooth",
        "valor": 199,
        "quantidadeEmEstoque": 80,
        "fabricante": "SoundWave",
        "categoria": "Áudio",
        "descricao": "Caixa de som portátil com conexão Bluetooth."
      },
      {
        "nome": "Relógio Smart Fitness",
        "valor": 349,
        "quantidadeEmEstoque": 40,
        "fabricante": "FitTech",
        "categoria": "Wearables",
        "descricao": "Relógio inteligente com monitoramento de atividades."
      },
      {
        "nome": "Cafeteira Elétrica",
        "valor": 199,
        "quantidadeEmEstoque": 75,
        "fabricante": "Café Bom",
        "categoria": "Eletrodomésticos",
        "descricao": "Cafeteira com timer e função anti-gotejo."
      },
      {
        "nome": "Console de Videogame",
        "valor": 2499,
        "quantidadeEmEstoque": 12,
        "fabricante": "PlayZone",
        "categoria": "Games",
        "descricao": "Console com os melhores jogos do momento."
      },
      {
        "nome": "Jogo de Panelas Antiaderentes",
        "valor": 349,
        "quantidadeEmEstoque": 30,
        "fabricante": "Cozinha Prática",
        "categoria": "Utensílios",
        "descricao": "Jogo de panelas com revestimento antiaderente."
      },
      {
        "nome": "Batedeira Planetária",
        "valor": 499,
        "quantidadeEmEstoque": 25,
        "fabricante": "Cozinha Facilita",
        "categoria": "Eletrodomésticos",
        "descricao": "Batedeira com várias velocidades e acessórios."
      },
      {
        "nome": "Ventilador de Mesa",
        "valor": 89,
        "quantidadeEmEstoque": 150,
        "fabricante": "Ar Fresco",
        "categoria": "Eletrodomésticos",
        "descricao": "Ventilador portátil e silencioso."
      },
      {
        "nome": "Aspirador de Pó Vertical",
        "valor": 399,
        "quantidadeEmEstoque": 30,
        "fabricante": "Limpeza Fácil",
        "categoria": "Eletrodomésticos",
        "descricao": "Aspirador de pó vertical sem fio."
      },
      {
        "nome": "Fone de Ouvido Sem Fio",
        "valor": 249,
        "quantidadeEmEstoque": 70,
        "fabricante": "AudioMaster",
        "categoria": "Áudio",
        "descricao": "Fones de ouvido sem fio com cancelamento de ruído."
      },
      {
        "nome": "Câmera de Segurança Wi-Fi",
        "valor": 499,
        "quantidadeEmEstoque": 25,
        "fabricante": "Segurança Total",
        "categoria": "Segurança",
        "descricao": "Câmera com visão noturna e aplicativo para celular."
      },
      {
        "nome": "Roteador Wi-Fi 5G",
        "valor": 299,
        "quantidadeEmEstoque": 40,
        "fabricante": "Conexão Rápida",
        "categoria": "Rede",
        "descricao": "Roteador com alta velocidade e cobertura extensa."
      },
      {
        "nome": "Monitor Full HD 24\"",
        "valor": 799,
        "quantidadeEmEstoque": 20,
        "fabricante": "Visão Clara",
        "categoria": "Computadores",
        "descricao": "Monitor com qualidade de imagem Full HD."
      },
      {
        "nome": "Tablet 10\"",
        "valor": 899,
        "quantidadeEmEstoque": 30,
        "fabricante": "TechTablet",
        "categoria": "Eletrônicos",
        "descricao": "Tablet com tela sensível ao toque e 64GB de armazenamento."
      },
      {
        "nome": "Chaleira Elétrica",
        "valor": 149,
        "quantidadeEmEstoque": 60,
        "fabricante": "Cozinha Rápida",
        "categoria": "Eletrodomésticos",
        "descricao": "Chaleira elétrica com desligamento automático."
      },
      {
        "nome": "Air Fryer Digital",
        "valor": 399,
        "quantidadeEmEstoque": 25,
        "fabricante": "Cozinha Moderna",
        "categoria": "Eletrodomésticos",
        "descricao": "Air fryer com painel digital e várias funções."
      },
      {
        "nome": "Câmera Fotográfica Digital",
        "valor": 1499,
        "quantidadeEmEstoque": 10,
        "fabricante": "FotoPerfeita",
        "categoria": "Fotografia",
        "descricao": "Câmera digital com lentes intercambiáveis."
      },
      {
        "nome": "Processador Intel i7",
        "valor": 1499,
        "quantidadeEmEstoque": 20,
        "fabricante": "PC Power",
        "categoria": "Componentes",
        "descricao": "Processador de alto desempenho para desktops."
      },
      {
        "nome": "Placa de Vídeo RTX 3060",
        "valor": 2899,
        "quantidadeEmEstoque": 5,
        "fabricante": "GamerVision",
        "categoria": "Componentes",
        "descricao": "Placa de vídeo para jogos em alta resolução."
      },
      {
        "nome": "HD Externo 1TB",
        "valor": 299,
        "quantidadeEmEstoque": 50,
        "fabricante": "StoragePlus",
        "categoria": "Armazenamento",
        "descricao": "HD externo portátil com 1TB de capacidade."
      },
      {
        "nome": "Micro-ondas Digital",
        "valor": 699,
        "quantidadeEmEstoque": 30,
        "fabricante": "Cozinha Rápida",
        "categoria": "Eletrodomésticos",
        "descricao": "Micro-ondas com várias funções e painel digital."
      },
      {
        "nome": "Drone com Câmera",
        "valor": 1299,
        "quantidadeEmEstoque": 15,
        "fabricante": "SkyCapture",
        "categoria": "Tecnologia"
      },
      {
        "nome": "Smartwatch Avançado",
        "valor": 899,
        "quantidadeEmEstoque": 50,
        "fabricante": "WristTech",
        "categoria": "Wearables",
        "descricao": "Relógio inteligente com monitoramento de saúde e GPS integrado."
      },
      {
        "nome": "Impressora Multifuncional",
        "valor": 699,
        "quantidadeEmEstoque": 35,
        "fabricante": "PrintMaster",
        "categoria": "Periféricos",
        "descricao": "Impressora, scanner e copiadora em um só aparelho."
      },
      {
        "nome": "Ventilador de Torre",
        "valor": 349,
        "quantidadeEmEstoque": 40,
        "fabricante": "ClimaFresco",
        "categoria": "Eletrodomésticos",
        "descricao": "Ventilador de torre com controle remoto."
      },
      {
        "nome": "Smartphone Y2",
        "valor": 1199,
        "quantidadeEmEstoque": 25,
        "fabricante": "PhoneTech",
        "categoria": "Eletrônicos",
        "descricao": "Smartphone com bateria de longa duração e câmera dupla."
      },
      {
        "nome": "Purificador de Água",
        "valor": 599,
        "quantidadeEmEstoque": 20,
        "fabricante": "PureH2O",
        "categoria": "Eletrodomésticos",
        "descricao": "Purificador de água com filtro de carvão ativo."
      },
      {
        "nome": "Máquina de Lavar Roupa",
        "valor": 1999,
        "quantidadeEmEstoque": 10,
        "fabricante": "LavaRoupas",
        "categoria": "Eletrodomésticos",
        "descricao": "Máquina de lavar com ciclo rápido e função eco."
      },
      {
        "nome": "Câmera DSLR Profissional",
        "valor": 2999,
        "quantidadeEmEstoque": 8,
        "fabricante": "ProPhoto",
        "categoria": "Fotografia",
        "descricao": "Câmera DSLR com sensor de alta resolução."
      },
      {
        "nome": "Forno Elétrico",
        "valor": 799,
        "quantidadeEmEstoque": 18,
        "fabricante": "Cozinha Fácil",
        "categoria": "Eletrodomésticos",
        "descricao": "Forno elétrico com múltiplas funções de cozimento."
      },
      {
        "nome": "Fogão 4 Bocas",
        "valor": 999,
        "quantidadeEmEstoque": 12,
        "fabricante": "Culinária Master",
        "categoria": "Eletrodomésticos",
        "descricao": "Fogão a gás com acendimento automático."
      },
      {
        "nome": "Tablet Educacional",
        "valor": 499,
        "quantidadeEmEstoque": 40,
        "fabricante": "EducaTech",
        "categoria": "Eletrônicos",
        "descricao": "Tablet com software educativo para crianças."
      },
      {
        "nome": "Luminária de Mesa",
        "valor": 149,
        "quantidadeEmEstoque": 60,
        "fabricante": "Luz&Cia",
        "categoria": "Iluminação",
        "descricao": "Luminária de mesa com ajuste de intensidade de luz."
      },
      {
        "nome": "Barbeador Elétrico",
        "valor": 199,
        "quantidadeEmEstoque": 55,
        "fabricante": "ShaveTech",
        "categoria": "Cuidados Pessoais",
        "descricao": "Barbeador elétrico recarregável com lâminas de precisão."
      },
      {
        "nome": "Som Automotivo",
        "valor": 899,
        "quantidadeEmEstoque": 30,
        "fabricante": "CarAudio",
        "categoria": "Automotivo",
        "descricao": "Sistema de som automotivo com Bluetooth."
      },
      {
        "nome": "Camera de Ação",
        "valor": 1199,
        "quantidadeEmEstoque": 25,
        "fabricante": "AdventureCam",
        "categoria": "Fotografia",
        "descricao": "Câmera de ação à prova d'água com gravação em 4K."
      },
      {
        "nome": "Ar Condicionado Portátil",
        "valor": 1599,
        "quantidadeEmEstoque": 12,
        "fabricante": "ClimaGel",
        "categoria": "Eletrodomésticos",
        "descricao": "Ar condicionado portátil com controle de temperatura digital."
      },
      {
        "nome": "Liquidificador Turbo",
        "valor": 199,
        "quantidadeEmEstoque": 65,
        "fabricante": "BateTudo",
        "categoria": "Eletrodomésticos",
        "descricao": "Liquidificador com lâminas reforçadas e várias velocidades."
      },
      {
        "nome": "Caixa de Ferramentas Completa",
        "valor": 349,
        "quantidadeEmEstoque": 45,
        "fabricante": "FerramentasPro",
        "categoria": "Ferramentas",
        "descricao": "Caixa de ferramentas com 150 peças para uso geral."
      },
      {
        "nome": "Bicicleta Ergométrica",
        "valor": 1299,
        "quantidadeEmEstoque": 10,
        "fabricante": "FitBike",
        "categoria": "Fitness",
        "descricao": "Bicicleta ergométrica com monitor de batimentos cardíacos."
      },
      {
        "nome": "Cafeteira Expresso",
        "valor": 599,
        "quantidadeEmEstoque": 30,
        "fabricante": "Café Gourmet",
        "categoria": "Eletrodomésticos",
        "descricao": "Cafeteira expresso para cápsulas de café."
      },
      {
        "nome": "Escova de Cabelo Elétrica",
        "valor": 299,
        "quantidadeEmEstoque": 75,
        "fabricante": "BeautyHair",
        "categoria": "Cuidados Pessoais",
        "descricao": "Escova de cabelo com aquecimento e íons negativos."
      },
      {
        "nome": "Torradeira Elétrica",
        "valor": 149,
        "quantidadeEmEstoque": 80,
        "fabricante": "TostaFácil",
        "categoria": "Eletrodomésticos",
        "descricao": "Torradeira elétrica com controle de tempo ajustável."
      },
      {
        "nome": "Microfone Condensador",
        "valor": 499,
        "quantidadeEmEstoque": 50,
        "fabricante": "SoundPro",
        "categoria": "Áudio",
        "descricao": "Microfone condensador ideal para gravação de voz e instrumentos."
      }
            
         
    ] 
);