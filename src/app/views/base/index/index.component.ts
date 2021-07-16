import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  carouselList = [
    {
      bannerImg: "https://img.autocosmos.com/noticias/fotos/preview/NAZ_7f3f95f1cfa9447681af051fc31e4807.jpg",
      title: "Harley-Davidson Pan America 1250",
      description: "Harley-Davidson Pan America 1250: una moto de aventura repleta de tecnología",
    },
    {
      bannerImg: "https://miro.medium.com/max/1400/1*wSZ58tB6MnJ3sVf-Y5poWA.png",
      title: "Harley-Davidson",
      description:
        "1981 Harley-Davidson Count’s Kustoms Special Edition",
    },
    {
      bannerImg: "https://cdn1.polaris.com/globalassets/indian/2021/model/model-pages/scout-bobber/overview/hero/scout-bobber-hero-xxs.jpg?v=84f51b16&width=479&mode=min",
      title: "Indian Scout Bobber",
      description: "Scout Bobber Desde $10,999 Precio de venta sugerido por el fabricante en EE. UU.",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
