/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Estonian [et]
//! author : Chris Gedrim : https://github.com/a90machado
/** @type {?} */
const processRelativeTime = function (num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    const format = {
        s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
        ss: [num + 'sekundi', num + 'sekundit'],
        m: ['ühe minuti', 'üks minut'],
        mm: [num + ' minuti', num + ' minutit'],
        h: ['ühe tunni', 'tund aega', 'üks tund'],
        hh: [num + ' tunni', num + ' tundi'],
        d: ['ühe päeva', 'üks päev'],
        M: ['kuu aja', 'kuu aega', 'üks kuu'],
        MM: [num + ' kuu', num + ' kuud'],
        y: ['ühe aasta', 'aasta', 'üks aasta'],
        yy: [num + ' aasta', num + ' aastat']
    };
    if (withoutSuffix) {
        return format[key][2] ? format[key][2] : format[key][1];
    }
    return isFuture ? format[key][0] : format[key][1];
};
const ɵ0 = processRelativeTime;
/** @type {?} */
export const etLocale = {
    abbr: 'et',
    months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
    monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
    weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
    weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
    weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[Täna,] LT',
        nextDay: '[Homme,] LT',
        nextWeek: '[Järgmine] dddd LT',
        lastDay: '[Eile,] LT',
        lastWeek: '[Eelmine] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s pärast',
        past: '%s tagasi',
        s: processRelativeTime,
        ss: processRelativeTime,
        m: processRelativeTime,
        mm: processRelativeTime,
        h: processRelativeTime,
        hh: processRelativeTime,
        d: processRelativeTime,
        dd: '%d päeva',
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztNQVdNLG1CQUFtQixHQUFHLFVBQVUsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVyxFQUFFLFFBQWlCOztVQUNqRyxNQUFNLEdBQUc7UUFDWCxDQUFDLEVBQUcsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztRQUNwRCxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsU0FBUyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUM7UUFDdkMsQ0FBQyxFQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztRQUMvQixFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsU0FBUyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUM7UUFDdkMsQ0FBQyxFQUFHLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7UUFDMUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLENBQUMsRUFBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUM7UUFDN0IsQ0FBQyxFQUFHLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUM7UUFDdEMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLENBQUMsRUFBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDO1FBQ3ZDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxHQUFHLFNBQVMsQ0FBQztLQUN4QztJQUNELElBQUksYUFBYSxFQUFFO1FBQ2YsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzNEO0lBQ0QsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUM7OztBQUVELE1BQU0sT0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsNEZBQTRGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvRyxXQUFXLEVBQUUsNERBQTRELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwRixRQUFRLEVBQUUsZ0VBQWdFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNyRixhQUFhLEVBQUUsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDekMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZDLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBSSxNQUFNO1FBQ1osR0FBRyxFQUFHLFNBQVM7UUFDZixDQUFDLEVBQUssWUFBWTtRQUNsQixFQUFFLEVBQUksY0FBYztRQUNwQixHQUFHLEVBQUcsbUJBQW1CO1FBQ3pCLElBQUksRUFBRSx5QkFBeUI7S0FDaEM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUcsWUFBWTtRQUN0QixPQUFPLEVBQUcsYUFBYTtRQUN2QixRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLE9BQU8sRUFBRyxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRztRQUNiLE1BQU0sRUFBRyxXQUFXO1FBQ3BCLElBQUksRUFBSyxXQUFXO1FBQ3BCLENBQUMsRUFBUSxtQkFBbUI7UUFDNUIsRUFBRSxFQUFPLG1CQUFtQjtRQUM1QixDQUFDLEVBQVEsbUJBQW1CO1FBQzVCLEVBQUUsRUFBTyxtQkFBbUI7UUFDNUIsQ0FBQyxFQUFRLG1CQUFtQjtRQUM1QixFQUFFLEVBQU8sbUJBQW1CO1FBQzVCLENBQUMsRUFBUSxtQkFBbUI7UUFDNUIsRUFBRSxFQUFPLFVBQVU7UUFDbkIsQ0FBQyxFQUFRLG1CQUFtQjtRQUM1QixFQUFFLEVBQU8sbUJBQW1CO1FBQzVCLENBQUMsRUFBUSxtQkFBbUI7UUFDNUIsRUFBRSxFQUFPLG1CQUFtQjtLQUM3QjtJQUNELHNCQUFzQixFQUFHLFVBQVU7SUFDbkMsT0FBTyxFQUFHLEtBQUs7SUFDZixJQUFJLEVBQUc7UUFDSCxHQUFHLEVBQUcsQ0FBQzs7UUFDUCxHQUFHLEVBQUcsQ0FBQyxDQUFFLGdFQUFnRTtLQUM1RTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBFc3RvbmlhbiBbZXRdXG4vLyEgYXV0aG9yIDogQ2hyaXMgR2VkcmltIDogaHR0cHM6Ly9naXRodWIuY29tL2E5MG1hY2hhZG9cblxuY29uc3QgcHJvY2Vzc1JlbGF0aXZlVGltZSA9IGZ1bmN0aW9uIChudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKSB7XG4gIGNvbnN0IGZvcm1hdCA9IHtcbiAgICAgIHMgOiBbJ23DtW5lIHNla3VuZGknLCAnbcO1bmkgc2VrdW5kJywgJ3BhYXIgc2VrdW5kaXQnXSxcbiAgICAgIHNzOiBbbnVtICsgJ3Nla3VuZGknLCBudW0gKyAnc2VrdW5kaXQnXSxcbiAgICAgIG0gOiBbJ8O8aGUgbWludXRpJywgJ8O8a3MgbWludXQnXSxcbiAgICAgIG1tOiBbbnVtICsgJyBtaW51dGknLCBudW0gKyAnIG1pbnV0aXQnXSxcbiAgICAgIGggOiBbJ8O8aGUgdHVubmknLCAndHVuZCBhZWdhJywgJ8O8a3MgdHVuZCddLFxuICAgICAgaGg6IFtudW0gKyAnIHR1bm5pJywgbnVtICsgJyB0dW5kaSddLFxuICAgICAgZCA6IFsnw7xoZSBww6RldmEnLCAnw7xrcyBww6RldiddLFxuICAgICAgTSA6IFsna3V1IGFqYScsICdrdXUgYWVnYScsICfDvGtzIGt1dSddLFxuICAgICAgTU06IFtudW0gKyAnIGt1dScsIG51bSArICcga3V1ZCddLFxuICAgICAgeSA6IFsnw7xoZSBhYXN0YScsICdhYXN0YScsICfDvGtzIGFhc3RhJ10sXG4gICAgICB5eTogW251bSArICcgYWFzdGEnLCBudW0gKyAnIGFhc3RhdCddXG4gIH07XG4gIGlmICh3aXRob3V0U3VmZml4KSB7XG4gICAgICByZXR1cm4gZm9ybWF0W2tleV1bMl0gPyBmb3JtYXRba2V5XVsyXSA6IGZvcm1hdFtrZXldWzFdO1xuICB9XG4gIHJldHVybiBpc0Z1dHVyZSA/IGZvcm1hdFtrZXldWzBdIDogZm9ybWF0W2tleV1bMV07XG59O1xuXG5leHBvcnQgY29uc3QgZXRMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdldCcsXG4gIG1vbnRoczogJ2phYW51YXJfdmVlYnJ1YXJfbcOkcnRzX2FwcmlsbF9tYWlfanV1bmlfanV1bGlfYXVndXN0X3NlcHRlbWJlcl9va3Rvb2Jlcl9ub3ZlbWJlcl9kZXRzZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnamFhbl92ZWVicl9tw6RydHNfYXByX21haV9qdXVuaV9qdXVsaV9hdWdfc2VwdF9va3Rfbm92X2RldHMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAncMO8aGFww6Rldl9lc21hc3DDpGV2X3RlaXNpcMOkZXZfa29sbWFww6Rldl9uZWxqYXDDpGV2X3JlZWRlX2xhdXDDpGV2Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnUF9FX1RfS19OX1JfTCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdQX0VfVF9LX05fUl9MJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAgICdIOm1tJyxcbiAgICBMVFM6ICAnSDptbTpzcycsXG4gICAgTDogICAgJ0RELk1NLllZWVknLFxuICAgIExMOiAgICdELiBNTU1NIFlZWVknLFxuICAgIExMTDogICdELiBNTU1NIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQuIE1NTU0gWVlZWSBIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICAnW1TDpG5hLF0gTFQnLFxuICAgIG5leHREYXk6ICAnW0hvbW1lLF0gTFQnLFxuICAgIG5leHRXZWVrOiAnW0rDpHJnbWluZV0gZGRkZCBMVCcsXG4gICAgbGFzdERheTogICdbRWlsZSxdIExUJyxcbiAgICBsYXN0V2VlazogJ1tFZWxtaW5lXSBkZGRkIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICBmdXR1cmUgOiAnJXMgcMOkcmFzdCcsXG4gICAgcGFzdCAgIDogJyVzIHRhZ2FzaScsXG4gICAgcyAgICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBzcyAgICAgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIG0gICAgICA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgbW0gICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBoICAgICAgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIGhoICAgICA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgZCAgICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBkZCAgICAgOiAnJWQgcMOkZXZhJyxcbiAgICBNICAgICAgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIE1NICAgICA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgeSAgICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICB5eSAgICAgOiBwcm9jZXNzUmVsYXRpdmVUaW1lXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2UgOiAvXFxkezEsMn0uLyxcbiAgb3JkaW5hbCA6ICclZC4nLFxuICB3ZWVrIDoge1xuICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXX0=