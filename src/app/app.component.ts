import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { WindowRefService } from './service/window-ref.service';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from './service/canonical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  window = this.windowRef.nativeWindow;
  ready = false;

  constructor(
    private windowRef: WindowRefService,
    private chRef: ChangeDetectorRef,
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) { }

  ngOnInit() {
    this.canonicalService.setCanonicalURL();
    this.metaService();
    this.waitForLoadOrNOtDependingOnBrowser();

  }

  metaService() {
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: 'Oinoapostagmaisonparea, Oinoapostagma, Οινοαποσταγμα, Οινοαποσταγμαισονπαρεα, Μεζεδοπωλειο, καλη παρεα, Τσιπουρο, Τσιπουρακι, ουζο, ρακομελο, μπυρα, κρασι, Σαλατες, Σχαρα, Τηγανι, Μεζεδακια, Για την μεση, Τηγανια, πατατες'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2020-05-28', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }

  waitForLoadOrNOtDependingOnBrowser() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(this.window.navigator.userAgent);
    const iOS = /iPad|iPhone|iPod/.test(this.window.navigator.platform);
    const isIEOrEdge = /msie\s|trident\/|edge\//i.test(this.window.navigator.userAgent);
    if (isSafari || iOS || isIEOrEdge) {
      this.ready = true;
    } else {
      this.window.onload = () => {
        this.ready = true;
        this.chRef.detectChanges();
      };
    }
  }
}
