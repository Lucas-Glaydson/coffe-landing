import { trigger, state, transition, style, animate } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  state('hide', style({ opacity: 0, transform: 'translateY(20px)' })),
  state('show', style({ opacity: 1, transform: 'translateY(0)' })),
  transition('hide <=> show', animate('600ms ease-out'))
]);

export const slideIn = trigger('slideIn', [
  state('hide', style({ opacity: 0, transform: 'translateY(10px)' })), // Oculto quando sai
  state('show', style({ opacity: 1, transform: 'translateY(0)' })), // Visível quando entra
  transition('hide <=> show', animate('200ms ease-out')) // Transição
]);

export const slideInFromRight = trigger('slideInFromRight', [
  state('hide', style({ opacity: 0, transform: 'translateX(100%)' })), // Oculto fora da tela à direita
  state('show', style({ opacity: 1, transform: 'translateX(0)' })), // Visível no lugar original
  transition('hide <=> show', animate('300ms ease-out')) // Transição suave
]);

export const slideInFromLeft = trigger('slideInFromLeft', [
  state('hide', style({ opacity: 0, transform: 'translateX(-100%)' })), // Oculto fora da tela à esquerda
  state('show', style({ opacity: 1, transform: 'translateX(0)' })), // Visível no lugar original
  transition('hide <=> show', animate('600ms ease-out')) // Transição suave
]);

//
