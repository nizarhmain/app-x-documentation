'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">My app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-7e5deae7e98d123841e3dfc6899086a3"' : 'data-target="#xs-components-links-module-AppModule-7e5deae7e98d123841e3dfc6899086a3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7e5deae7e98d123841e3dfc6899086a3"' :
                                            'id="xs-components-links-module-AppModule-7e5deae7e98d123841e3dfc6899086a3"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-7e5deae7e98d123841e3dfc6899086a3"' : 'data-target="#xs-injectables-links-module-AppModule-7e5deae7e98d123841e3dfc6899086a3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-7e5deae7e98d123841e3dfc6899086a3"' :
                                        'id="xs-injectables-links-module-AppModule-7e5deae7e98d123841e3dfc6899086a3"' }>
                                        <li class="link">
                                            <a href="injectables/DbProvider.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DbProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DbToolProvider.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DbToolProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FileProvider.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FileProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GlobalProvider.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GlobalProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RestProvider.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RestProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SyncProvider.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SyncProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ToolsProvider.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ToolsProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ArticoliListPageModule.html" data-type="entity-link">ArticoliListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ArticoliListPageModule-eede8a226dc5e3fccab1c836d4e96358"' : 'data-target="#xs-components-links-module-ArticoliListPageModule-eede8a226dc5e3fccab1c836d4e96358"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArticoliListPageModule-eede8a226dc5e3fccab1c836d4e96358"' :
                                            'id="xs-components-links-module-ArticoliListPageModule-eede8a226dc5e3fccab1c836d4e96358"' }>
                                            <li class="link">
                                                <a href="components/ArticoliListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArticoliListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArticoliPreferitiListPageModule.html" data-type="entity-link">ArticoliPreferitiListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ArticoliPreferitiListPageModule-c17f0415525cfb18404cb46824bcbccb"' : 'data-target="#xs-components-links-module-ArticoliPreferitiListPageModule-c17f0415525cfb18404cb46824bcbccb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArticoliPreferitiListPageModule-c17f0415525cfb18404cb46824bcbccb"' :
                                            'id="xs-components-links-module-ArticoliPreferitiListPageModule-c17f0415525cfb18404cb46824bcbccb"' }>
                                            <li class="link">
                                                <a href="components/ArticoliPreferitiListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArticoliPreferitiListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArticoloInfoPageModule.html" data-type="entity-link">ArticoloInfoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ArticoloInfoPageModule-b3b0d23678e59fa7fb793247ff59a77a"' : 'data-target="#xs-components-links-module-ArticoloInfoPageModule-b3b0d23678e59fa7fb793247ff59a77a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArticoloInfoPageModule-b3b0d23678e59fa7fb793247ff59a77a"' :
                                            'id="xs-components-links-module-ArticoloInfoPageModule-b3b0d23678e59fa7fb793247ff59a77a"' }>
                                            <li class="link">
                                                <a href="components/ArticoloInfoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArticoloInfoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CarrelloPageModule.html" data-type="entity-link">CarrelloPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CarrelloPageModule-8e63c0747d4b59d3ea55c4f77f5e7802"' : 'data-target="#xs-components-links-module-CarrelloPageModule-8e63c0747d4b59d3ea55c4f77f5e7802"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CarrelloPageModule-8e63c0747d4b59d3ea55c4f77f5e7802"' :
                                            'id="xs-components-links-module-CarrelloPageModule-8e63c0747d4b59d3ea55c4f77f5e7802"' }>
                                            <li class="link">
                                                <a href="components/CarrelloPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarrelloPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClienteInfoPageModule.html" data-type="entity-link">ClienteInfoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClienteInfoPageModule-10d224ae96860aee1aa4b3a06e3ee105"' : 'data-target="#xs-components-links-module-ClienteInfoPageModule-10d224ae96860aee1aa4b3a06e3ee105"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClienteInfoPageModule-10d224ae96860aee1aa4b3a06e3ee105"' :
                                            'id="xs-components-links-module-ClienteInfoPageModule-10d224ae96860aee1aa4b3a06e3ee105"' }>
                                            <li class="link">
                                                <a href="components/ClienteInfoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClienteInfoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientiListPageModule.html" data-type="entity-link">ClientiListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientiListPageModule-75ba2512b053901cf15bd2303ebc73fa"' : 'data-target="#xs-components-links-module-ClientiListPageModule-75ba2512b053901cf15bd2303ebc73fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientiListPageModule-75ba2512b053901cf15bd2303ebc73fa"' :
                                            'id="xs-components-links-module-ClientiListPageModule-75ba2512b053901cf15bd2303ebc73fa"' }>
                                            <li class="link">
                                                <a href="components/ClientiListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClientiListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DestinatariListPageModule.html" data-type="entity-link">DestinatariListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DestinatariListPageModule-dc20947d1c1540109c659df00f629a6f"' : 'data-target="#xs-components-links-module-DestinatariListPageModule-dc20947d1c1540109c659df00f629a6f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DestinatariListPageModule-dc20947d1c1540109c659df00f629a6f"' :
                                            'id="xs-components-links-module-DestinatariListPageModule-dc20947d1c1540109c659df00f629a6f"' }>
                                            <li class="link">
                                                <a href="components/DestinatariListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DestinatariListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DestinatarioInfoPageModule.html" data-type="entity-link">DestinatarioInfoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DestinatarioInfoPageModule-29b6c368628bf41ab14e9a9383d83a0c"' : 'data-target="#xs-components-links-module-DestinatarioInfoPageModule-29b6c368628bf41ab14e9a9383d83a0c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DestinatarioInfoPageModule-29b6c368628bf41ab14e9a9383d83a0c"' :
                                            'id="xs-components-links-module-DestinatarioInfoPageModule-29b6c368628bf41ab14e9a9383d83a0c"' }>
                                            <li class="link">
                                                <a href="components/DestinatarioInfoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DestinatarioInfoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-dd7cc705bfe7ff9bf3034873279e5906"' : 'data-target="#xs-components-links-module-HomePageModule-dd7cc705bfe7ff9bf3034873279e5906"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-dd7cc705bfe7ff9bf3034873279e5906"' :
                                            'id="xs-components-links-module-HomePageModule-dd7cc705bfe7ff9bf3034873279e5906"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListinoMarca2PageModule.html" data-type="entity-link">ListinoMarca2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListinoMarca2PageModule-3c502d5b7a04fb36acd39115ededc31d"' : 'data-target="#xs-components-links-module-ListinoMarca2PageModule-3c502d5b7a04fb36acd39115ededc31d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListinoMarca2PageModule-3c502d5b7a04fb36acd39115ededc31d"' :
                                            'id="xs-components-links-module-ListinoMarca2PageModule-3c502d5b7a04fb36acd39115ededc31d"' }>
                                            <li class="link">
                                                <a href="components/ListinoMarca2Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListinoMarca2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListinoMarcaPageModule.html" data-type="entity-link">ListinoMarcaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListinoMarcaPageModule-74d35c8fd9a573b4cce45026f22ecc64"' : 'data-target="#xs-components-links-module-ListinoMarcaPageModule-74d35c8fd9a573b4cce45026f22ecc64"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListinoMarcaPageModule-74d35c8fd9a573b4cce45026f22ecc64"' :
                                            'id="xs-components-links-module-ListinoMarcaPageModule-74d35c8fd9a573b4cce45026f22ecc64"' }>
                                            <li class="link">
                                                <a href="components/ListinoMarcaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListinoMarcaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LogViewerPageModule.html" data-type="entity-link">LogViewerPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LogViewerPageModule-45336a3aa4a26c72eb860c2476ac2a12"' : 'data-target="#xs-components-links-module-LogViewerPageModule-45336a3aa4a26c72eb860c2476ac2a12"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LogViewerPageModule-45336a3aa4a26c72eb860c2476ac2a12"' :
                                            'id="xs-components-links-module-LogViewerPageModule-45336a3aa4a26c72eb860c2476ac2a12"' }>
                                            <li class="link">
                                                <a href="components/LogViewerPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogViewerPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdineViewerPageModule.html" data-type="entity-link">OrdineViewerPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdineViewerPageModule-ff8d93e97ea750bc46f1dc24890a96f2"' : 'data-target="#xs-components-links-module-OrdineViewerPageModule-ff8d93e97ea750bc46f1dc24890a96f2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdineViewerPageModule-ff8d93e97ea750bc46f1dc24890a96f2"' :
                                            'id="xs-components-links-module-OrdineViewerPageModule-ff8d93e97ea750bc46f1dc24890a96f2"' }>
                                            <li class="link">
                                                <a href="components/OrdineViewerPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrdineViewerPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdiniListPageModule.html" data-type="entity-link">OrdiniListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdiniListPageModule-27b19ece646176277de4cc907aae2535"' : 'data-target="#xs-components-links-module-OrdiniListPageModule-27b19ece646176277de4cc907aae2535"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdiniListPageModule-27b19ece646176277de4cc907aae2535"' :
                                            'id="xs-components-links-module-OrdiniListPageModule-27b19ece646176277de4cc907aae2535"' }>
                                            <li class="link">
                                                <a href="components/OrdiniListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrdiniListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RiepilogoPageModule.html" data-type="entity-link">RiepilogoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RiepilogoPageModule-c6444b946b94ba487f10dd433da90be1"' : 'data-target="#xs-components-links-module-RiepilogoPageModule-c6444b946b94ba487f10dd433da90be1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RiepilogoPageModule-c6444b946b94ba487f10dd433da90be1"' :
                                            'id="xs-components-links-module-RiepilogoPageModule-c6444b946b94ba487f10dd433da90be1"' }>
                                            <li class="link">
                                                <a href="components/RiepilogoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RiepilogoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPageModule.html" data-type="entity-link">SettingsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsPageModule-9527616a285dd5d8d2e35312cfe5f797"' : 'data-target="#xs-components-links-module-SettingsPageModule-9527616a285dd5d8d2e35312cfe5f797"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsPageModule-9527616a285dd5d8d2e35312cfe5f797"' :
                                            'id="xs-components-links-module-SettingsPageModule-9527616a285dd5d8d2e35312cfe5f797"' }>
                                            <li class="link">
                                                <a href="components/SettingsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-ea379f5374e3ab80646054be75d4b9f1"' : 'data-target="#xs-components-links-module-SharedModule-ea379f5374e3ab80646054be75d4b9f1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-ea379f5374e3ab80646054be75d4b9f1"' :
                                            'id="xs-components-links-module-SharedModule-ea379f5374e3ab80646054be75d4b9f1"' }>
                                            <li class="link">
                                                <a href="components/CarrelloAppbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarrelloAppbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FabButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FabButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SyncPageModule.html" data-type="entity-link">SyncPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SyncPageModule-6849f21a59b991ee83a2f539bab222aa"' : 'data-target="#xs-components-links-module-SyncPageModule-6849f21a59b991ee83a2f539bab222aa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SyncPageModule-6849f21a59b991ee83a2f539bab222aa"' :
                                            'id="xs-components-links-module-SyncPageModule-6849f21a59b991ee83a2f539bab222aa"' }>
                                            <li class="link">
                                                <a href="components/SyncPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SyncPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link">TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsPageModule-e91723c989787888396980cfb9cffea6"' : 'data-target="#xs-components-links-module-TabsPageModule-e91723c989787888396980cfb9cffea6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-e91723c989787888396980cfb9cffea6"' :
                                            'id="xs-components-links-module-TabsPageModule-e91723c989787888396980cfb9cffea6"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link">TabsPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Articolo.html" data-type="entity-link">Articolo</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cliente.html" data-type="entity-link">Cliente</a>
                            </li>
                            <li class="link">
                                <a href="classes/Destinatario.html" data-type="entity-link">Destinatario</a>
                            </li>
                            <li class="link">
                                <a href="classes/Immagine.html" data-type="entity-link">Immagine</a>
                            </li>
                            <li class="link">
                                <a href="classes/Marca.html" data-type="entity-link">Marca</a>
                            </li>
                            <li class="link">
                                <a href="classes/Ordine.html" data-type="entity-link">Ordine</a>
                            </li>
                            <li class="link">
                                <a href="classes/Preferito.html" data-type="entity-link">Preferito</a>
                            </li>
                            <li class="link">
                                <a href="classes/RigaOrdine.html" data-type="entity-link">RigaOrdine</a>
                            </li>
                            <li class="link">
                                <a href="classes/Settings.html" data-type="entity-link">Settings</a>
                            </li>
                            <li class="link">
                                <a href="classes/TestataOrdine.html" data-type="entity-link">TestataOrdine</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DbProvider.html" data-type="entity-link">DbProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DbToolProvider.html" data-type="entity-link">DbToolProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileProvider.html" data-type="entity-link">FileProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GlobalProvider.html" data-type="entity-link">GlobalProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RestProvider.html" data-type="entity-link">RestProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StoreClientsInRamService.html" data-type="entity-link">StoreClientsInRamService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SyncProvider.html" data-type="entity-link">SyncProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToolsProvider.html" data-type="entity-link">ToolsProvider</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});