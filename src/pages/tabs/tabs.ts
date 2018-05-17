import {Component} from "@angular/core";

import {FavoritesPage} from "../favorites/favorites";
import {LibraryPage} from "../library/library";

@Component({
    selector: 'page-tabs',
    template: `
    <ion-tabs [selectedIndex]="0">
        <ion-tab [root]="favoritePage" tabTitle="Favorites" tabIcon="star"></ion-tab>
        <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="bookmark"></ion-tab>
    </ion-tabs>
    `

})

export class TabsPage {
    favoritePage = FavoritesPage;
    libraryPage = LibraryPage;
}