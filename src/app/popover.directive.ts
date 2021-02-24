import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive, EmbeddedViewRef,
  HostListener, Injector,
  Input,
  TemplateRef,
  ViewContainerRef,
  ViewRef
} from '@angular/core';
import {PopoverComponent} from './popover/popover.component';

@Directive({
  selector: '[appPopover]'
})
export class PopoverDirective {
  private componentRef: ComponentRef<any>;
  private contentVeiwRef: EmbeddedViewRef<any>;
  @Input() popover: TemplateRef<any>;
  @Input() title: string;
  @Input() position: string;
  @HostListener('mouseenter') show() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    this.contentVeiwRef = this.popover.createEmbeddedView(null);
    const componentFactory = this.componentFactory.resolveComponentFactory(PopoverComponent);
    this.componentRef =   this.viewContainerRef.createComponent(componentFactory, 0, this.injectore, [this.contentVeiwRef.rootNodes]);
    this.componentRef.instance.position = this.position;
    this.componentRef.instance.title = this.title;
    this.contentVeiwRef.detectChanges();
  }

  @HostListener('mouseleave') hide() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  constructor(private componentFactory: ComponentFactoryResolver, private injectore: Injector, private viewContainerRef: ViewContainerRef) { }

}
