let dados = [
    {
        titulo: "Marta Silva",
        descricao: "Marta Vieira da Silva, mais conhecida simplesmente como Marta, é um ícone do futebol feminino mundial. Com sua habilidade excepcional, velocidade e faro de gol, Marta conquistou o mundo e inspirou gerações.",
        link: "https://pt.wikipedia.org/wiki/Marta_(futebolista)",
        instagram: "https://www.instagram.com/martavsilva10/",
    },
    {
        titulo: "Megan Rapinoe",
        descricao: "Megan Rapinoe é uma das maiores jogadoras de futebol feminino da atualidade. Conhecida por sua habilidade com a bola, liderança e ativismo, Rapinoe foi fundamental para a conquista da Copa do Mundo Feminina de 2019 pela seleção dos Estados Unidos.",
        link: "https://en.wikipedia.org/wiki/Megan_Rapinoe", 
        instagram: "https://www.instagram.com/mrapinoe/",
    },
    {
        titulo: "Alexia Putellas",
        descricao: "Alexia Putellas é uma das maiores referências do futebol feminino espanhol. Com sua técnica refinada e visão de jogo, Putellas conquistou diversos títulos com o Barcelona e a seleção espanhola, além de ter sido eleita a melhor jogadora do mundo por diversas vezes.",
        link: "https://en.wikipedia.org/wiki/Alexia_Putellas", 
        instagram: "https://www.instagram.com/alexiaputellas/",
    },
    {
        titulo: "Cristiane Rozeira",
        descricao: "Cristiane Rozeira de Souza Silva, mais conhecida como Cristiane, é uma das maiores atacantes da história do futebol feminino brasileiro. Com uma carreira vitoriosa em clubes nacionais e internacionais, Cristiane é conhecida por sua força física, habilidade técnica e faro de gol.",
        link: "https://pt.wikipedia.org/wiki/Cristiane_Rozeira",
        instagram: "https://www.instagram.com/crisrozeira/",
    },
    {
        titulo: "Formiga",
        descricao: "Miraildes Sousa, mais conhecida como Formiga, é um ícone do futebol feminino mundial e a jogadora que mais vezes vestiu a camisa da seleção brasileira. Sua longevidade e resistência física são características marcantes de sua carreira, além de sua visão de jogo e habilidade para distribuir o jogo.",
        link: "https://pt.wikipedia.org/wiki/Formiga_(futebolista)",
        instagram: "https://www.instagram.com/oficial_formiga/",
    },
    {
        titulo: "Hope Solo",
        descricao: "Hope Amelia Solo é uma das maiores goleiras da história do futebol feminino. Conhecida por suas defesas espetaculares e personalidade forte, Solo foi fundamental para a conquista da Copa do Mundo Feminina de 2015 pela seleção dos Estados Unidos.",
        link: "https://en.wikipedia.org/wiki/Hope_Solo",
        instagram: "https://www.instagram.com/hopesolo/",
    },    
    {
        titulo: "Mia Hamm",
        descricao: "Mia Hamm é considerada uma das maiores jogadoras de futebol feminino de todos os tempos. Sua habilidade técnica, visão de jogo e liderança em campo a transformaram em um ícone do esporte nos Estados Unidos.",
        link: "https://en.wikipedia.org/wiki/Mia_Hamm",
        instagram: "https://www.instagram.com/miahamm/", 
    },
    {
        titulo: "Barbara",
        descricao: "Barbara Micheline Costa de Moraes, goleira da seleção brasileira, é conhecida por suas defesas espetaculares e por ter sido fundamental em diversas conquistas da equipe.",
        link: "https://pt.wikipedia.org/wiki/B%C3%A1rbara_(futebolista)",
        instagram: "https://www.instagram.com/barbaragol1/",
    },
    {
        titulo: "Aitana Bonmatí",
        descricao: "Aitana Bonmatí Castillo, meia espanhola, é uma das maiores promessas do futebol feminino mundial, conhecida por sua técnica refinada, visão de jogo e habilidade para marcar gols.",
        link: "https://en.wikipedia.org/wiki/Aitana_Bonmatí",
        instagram: "https://www.instagram.com/aitanabonmati/",
    },
    {
        titulo: "Jennifer Hermoso",
        descricao: "Jennifer Hermoso Blanco, atacante espanhola, é uma das principais artilheiras do futebol feminino mundial, conhecida por sua força física, habilidade para finalizar e personalidade carismática.",
        link: "https://en.wikipedia.org/wiki/Jennifer_Hermoso",
        instagram: "https://www.instagram.com/jennihermoso/",
    },
    {
        titulo: "Alex Morgan",
        descricao: "Alex Morgan, atacante americana, é um dos maiores ícones do futebol feminino mundial, conhecida por sua velocidade, habilidade para finalizar e por ter sido campeã mundial e olímpica.",
        link: "https://en.wikipedia.org/wiki/Alex_Morgan",
        instagram: "https://www.instagram.com/alexmorgan13/",
    },
    {
        titulo: "Andressa Alves da Silva",
        descricao: "Andressa Alves da Silva, atacante brasileira, é conhecida por sua velocidade, dribles e habilidade para finalizar, tendo atuado em diversos clubes europeus.",
        link: "https://pt.wikipedia.org/wiki/Andressa_Alves_da_Silva",
        instagram: "https://www.instagram.com/andressaalves9oficial/",
    },
    {
        titulo: "Antônia",
        descricao: "Antônia Maciel Silva, meio-campista brasileira, é conhecida por sua visão de jogo, passes precisos e capacidade de marcar gols de média distância.",
        link: "https://pt.wikipedia.org/wiki/Ant%C3%B4nia_(futebolista)",
        instagram: "https://www.instagram.com/antoniasilva_03/",
    },
    {
        titulo: "Ludmila da Silva",
        descricao: "Ludmila da Silva, atacante brasileira, é conhecida por sua velocidade, dribles e habilidade para finalizar, tendo atuado em diversos clubes brasileiros.",
        link: "https://pt.wikipedia.org/wiki/Ludmila_da_Silva",
        instagram: "https://www.instagram.com/ludmiladasilva09oficial/",
    },
    {
        titulo: "Sam Kerr",
        descricao: "Atacante australiana, conhecida por sua força física e habilidade de marcar gols.",
        link: "https://en.wikipedia.org/wiki/Sam_Kerr",
        instagram: "https://www.instagram.com/samanthakerr20/"
    }, 
    {
        titulo: "Salma Paralluelo",
        descricao: "Atacante espanhola, conhecida por sua velocidade e dribles eletrizantes. Foi uma das revelações da Copa do Mundo Feminina de 2023.",
        link: "https://es.wikipedia.org/wiki/Salma_Paralluelo",
        instagram: "https://www.instagram.com/salmaparalluelo/"
    },
    {
        titulo: "Fridolina Rolfö",
        descricao: "Meia-atacante sueca, conhecida por sua visão de jogo e habilidade para criar oportunidades de gol. Uma das principais peças da seleção sueca.",
        link: "https://en.wikipedia.org/wiki/Fridolina_Rolfö",
        instagram: "https://www.instagram.com/fridolinarolfo/"
    },
    {
        titulo: "Mary Earps",
        descricao: "Goleira inglesa, conhecida por suas defesas espetaculares e importância para a seleção inglesa.",
        link: "https://en.wikipedia.org/wiki/Mary_Earps",
        instagram: "https://www.instagram.com/maryearps/"
    },
    {
        titulo: "Olga Carmona",
        descricao: "Defensora espanhola, conhecida por sua solidez defensiva e gols importantes. Uma das peças-chave da seleção espanhola.",
        link: "https://es.wikipedia.org/wiki/Olga_Carmona",
        instagram: "https://www.instagram.com/olgacarmona7/"
    }, 
    {
        titulo: "Alexandra Popp",
        descricao: "Atacante alemã, conhecida por sua força física e cabeçadas precisas. Uma das principais referências do futebol feminino alemão.",
        link: "https://en.wikipedia.org/wiki/Alexandra_Popp",
        instagram: "https://www.instagram.com/alex.popp11/"
    },
    {
        titulo: "Patricia Guijarro",
        descricao: "Meia espanhola, conhecida por sua visão de jogo e passes precisos. Uma das peças-chave da seleção espanhola.",
        link: "https://es.wikipedia.org/wiki/Patricia_Guijarro",
        instagram: "https://www.instagram.com/patri8guijarro/"
    },
    {
        titulo: "Linda Caicedo",
        descricao: "Atacante colombiana, conhecida por sua habilidade individual e gols decisivos. Uma das maiores promessas do futebol feminino.",
        link: "https://en.wikipedia.org/wiki/Linda_Caicedo",
        instagram: "https://www.instagram.com/linda__caicedo11/",
    },
    {
        titulo: "Rachel Daly",
        descricao: "Atacante inglesa, conhecida por sua versatilidade e capacidade de atuar em diversas posições. Uma das principais peças da seleção inglesa.",
        link: "https://en.wikipedia.org/wiki/Rachel_Daly",
        instagram: "https://www.instagram.com/racheldaly3/"
    },
    {
        titulo: "Yasmim Assis Ribeiro",
        descricao: "Meia-atacante brasileira, conhecida por sua visão de jogo e passes precisos. Uma das promessas do futebol feminino brasileiro.",
        link: "https://pt.wikipedia.org/wiki/Yasmim_(futebolista)", 
        instagram: "https://www.instagram.com/yasmimaribeiro/",
    },
    {
        titulo: "Mônica Alves",
        descricao: "Zagueira brasileira, conhecida por sua liderança e solidez defensiva. Uma das referências do futebol feminino brasileiro.",
        link: "https://pt.wikipedia.org/wiki/M%C3%B4nica_Alves", 
        instagram: "https://www.instagram.com/monicahickmann/"
    },
    {
        titulo: "Andressinha",
        descricao: "Meia brasileira, conhecida por sua técnica e habilidade para marcar gols. Uma das principais peças da seleção brasileira.",
        link: "https://pt.wikipedia.org/wiki/Andressinha",
        instagram: "https://www.instagram.com/andressinha95/"
    },
    {
        titulo: "Lorena da Silva Leite",
        descricao: "Lorena da Silva Leite, conhecida como Lorena, é uma futebolista profissional brasileira que atua como goleira do Grêmio desde 2019 e goleira titular da Seleção Brasileira de Futebol Feminino desde 2021. Foi medalhista de prata nos Jogos Olímpicos de Paris em 2024",
        link: "https://pt.wikipedia.org/wiki/Lorena_da_Silva_Leite", 
        instagram: "https://www.instagram.com/loorenasilva23/"
    },
    {
        titulo: "Gabi Portilho",
        descricao: "Gabrielle Jordão Portilho, mais conhecida como Gabi Portilho, é uma futebolista brasileira que atua na posição de atacante. Atualmente, joga pelo Corinthians.Foi medalha de prata nos Jogos Olímpicos de Verão de 2024 pela seleção brasileira, e pelas categorias de base jogou a Copa do Mundo de Futebol Feminino Sub-17 em 2012,[1] e o Copa do Mundo de Futebol Feminino Sub-20 em 2014.",
        link: "https://pt.wikipedia.org/wiki/Gabi_Portilho", 
        instagram: "https://www.instagram.com/gaabiportilho/"
    }, 
    {
        titulo: "Ketlen Wiggers",
        descricao: "Ketlen Wiggers é uma futebolista brasileira que atua como atacante. Atualmente, joga no Santos. É a maior artilheira da história das Sereias da Vila com mais de 200 gols marcados.",
        link: "https://pt.wikipedia.org/wiki/Ketlen_Wiggers", 
        instagram: "https://www.instagram.com/ketlenwiggers/"
    },
    {
        titulo: "Rafaelle Souza",
        descricao: "Rafaelle Leone Carvalho Souza é uma futebolista profissional brasileira que atua como zagueira. Atualmente, joga no Orlando Pride, e na Seleção Brasileira de Futebol Feminino.",
        link: "https://pt.wikipedia.org/wiki/Rafaelle_Souza", 
        instagram: "https://www.instagram.com/rafaellesouza4/"
    },
    {
        titulo: "Kathellen",
        descricao: "Kathellen Sousa Feitoza é uma futebolista brasileira que atua como zagueira. Atualmente, joga pelo Al-Nassr, e na Seleção Brasileira.",
        link: "https://pt.wikipedia.org/wiki/Kathellen",
        instagram: "https://www.instagram.com/kathellensousa/"
    },
    {
        titulo: "Lauren Leal",
        descricao: "Lauren Eduarda Leal Costa, ou apenas Lauren, é uma futebolista brasileira que atua como zagueira. Atualmente, defende o clube estadunidense Kansas City Current.",
        link: "https://pt.wikipedia.org/wiki/Lauren_Leal", 
        instagram: "https://www.instagram.com/laurenleal__/"
    },
    {
        titulo: "Tamires",
        descricao: "Tamires Cássia Dias Gomes é uma futebolista profissional brasileira que atua como lateral-esquerda. Atualmente, joga pelo Corinthians e pela Seleção Brasileira. A jogadora foi uma das 23 convocadas para a Copa do Mundo de Futebol Feminino de 2023 pela técnica Pia Sundhage.",
        link: "https://pt.wikipedia.org/wiki/Tamires_(futebolista)", 
        instagram: "https://www.instagram.com/tamires/?hl=pt"
    },
    {
        titulo: "Ary Borges",
        descricao: "Ariadina Alves Borges, mais conhecida como Ary Borges, é uma futebolista brasileira, que atua como meio-campista. Atualmente joga pelo Racing Louisville e eventualmente pela Seleção Brasileira.",
        link: "https://pt.wikipedia.org/wiki/Ary_Borges", 
        instagram: "https://www.instagram.com/aryborges/"
    },
    {
        titulo: "Angelina",
        descricao: "Angelina Alonso Costantino, mais conhecida como Angelina, é uma futebolista profissional brasileira que joga como meio-campista. Atualmente no Orlando Pride, time da National Women's Soccer League.",
        link: "https://pt.wikipedia.org/wiki/Angelina_(futebolista)", 
        instagram: "https://www.instagram.com/angelinacostantino/?hl=pt"
    },     
    {
        titulo: "Duda Sampaio",
        descricao: "Maria Eduarda Ferreira Sampaio, conhecida como Duda Sampaio ou apenas Duda, é uma futebolista brasileira que atua como meio-campista do Corinthians.",
        link: "https://pt.wikipedia.org/wiki/Duda_Sampaio",
        instagram: "https://www.instagram.com/dudaasampaio10/"
    },
    {
        titulo: "Bia Zaneratto",
        descricao: "Beatriz Zaneratto João, mais conhecida como Bia Zaneratto, é uma futebolista brasileira que atua como atacante ou meio-campista. Atualmente joga pelo Kansas City Current e eventualmente pela Seleção Brasileira. Zaneratto, ou Imperatriz, como é chamada, é a maior artilheira da história do time feminino do Palmeiras.",
        link: "https://pt.wikipedia.org/wiki/Bia_Zaneratto",
        instagram: "https://www.instagram.com/biazaneratto/?hl=pt-br"
    },
    {
        titulo: "Priscila",
        descricao: "Priscila Flor da Silva, mais conhecido como Priscila, é uma futebolista brasileira que atua como atacante. Atualmente joga no Internacional.",
        link: "https://pt.wikipedia.org/wiki/Priscila_Flor_da_Silva", 
        instagram: "https://www.instagram.com/pri_silva.04/"
    }, 
    {
        titulo: "Tarciane",
        descricao: "Tarciane Karen dos Santos de Lima, também conhecida como Tarciane ou Tarci é uma futebolista brasileira que atua como zagueira. Atualmente, joga no Houston Dash.",
        link: "https://pt.wikipedia.org/wiki/Tarciane", 
        instagram: "https://pt.wikipedia.org/wiki/Tarciane"
    }, 
    {
        titulo: "Birgit Prinz",
        descricao: "Birgit Prinz é uma ex-futebolista profissional alemã. Ganhadora de três medalhas olímpicas de bronze, e vencedora do prêmio melhor jogadora da FIFA de: 2003, 2004 e 2005.",
        link: "https://pt.wikipedia.org/wiki/Birgit_Prinz",
        instagram: "https://www.instagram.com/birgit.prinz.official/"
    }, 
    {
        titulo: "Carli Lloyd",
        descricao: "Carli Ann Lloyd é uma futebolista norte-americana que atua como meio-campista. Atualmente, joga pelo Sky Blue.",
        link: "https://pt.wikipedia.org/wiki/Carli_Lloyd",
        instagram: "https://www.instagram.com/carlilloyd/"
    }, 
    {
        titulo: "Michelle Akers",
        descricao: "Michelle Akers é uma ex-futebolista estadunidense. Michelle foi considerada pela Fifa, em 2000, como a melhor jogadora do século XX – prêmio que dividiu com a chinesa Sun Wen –, marcou dez gols logo na primeira Copa da história, em 1991, conduzindo os Estados Unidos ao título.",
        link: "https://pt.wikipedia.org/wiki/Michelle_Akers",
        instagram: "https://www.instagram.com/officialmichelleakers/"
    },
    {
        titulo: "Alyssa Naeher",
        descricao: "Alyssa Michele Naeher é uma futebolista estadunidense que atua como goleira.",
        link: "https://www.instagram.com/alyssanaeher/",
        instagram: "https://pt.wikipedia.org/wiki/Alyssa_Naeher"
    },
    {
        titulo: "Kelley O'Hara",
        descricao: "Kelley Maureen O'Hara (Fayetteville (Geórgia), 4 de agosto de 1988) é uma futebolista profissional estadunidense que atua como defensora.",
        link: "https://www.instagram.com/kelleyohara/?hl=pt-br",
        instagram: "https://pt.wikipedia.org/wiki/Kelley_O%27Hara"
    },
    {
        titulo: "Lindsey Horan",
        descricao: "Lindsey Michelle Horan é uma futebolista estadunidense que atua como meio-campista, atualmente jogando pelo Portland Thorns FC.",
        link: "https://pt.wikipedia.org/wiki/Lindsey_Horan",
        instagram: "https://www.instagram.com/lindseyhoran10/"
    },
    {
        titulo: "Rose Lavelle",
        descricao: "Rosemary Kathleen Lavelle é uma futebolista estadunidense que atua como meio-campista. Atualmente joga pelo OL Reign.",
        link: "https://pt.wikipedia.org/wiki/Rose_Lavelle",
        instagram: "https://www.instagram.com/lavellerose/?hl=pt"
    }
]