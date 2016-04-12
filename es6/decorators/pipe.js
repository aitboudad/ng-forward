import Module from '../classes/module';
import decoratorFactory from '../util/decorator-factory';
const TYPE = 'pipe';
export const Pipe = decoratorFactory(TYPE);
Module.addProvider(TYPE, (provider, name, injects, ngModule) => {
    ngModule.filter(name, [...injects, (...dependencies) => {
            let pipe = new provider(...dependencies);
            if (!pipe.transform) {
                throw new Error('Filters must implement a transform method');
            }
            return (input, ...params) => {
                if (pipe.supports && !pipe.supports(input)) {
                    throw new Error(`Filter ${name} does not support ${input}`);
                }
                return pipe.transform(input, ...params);
            };
        }]);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9kZWNvcmF0b3JzL3BpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BdUJPLE1BQU0sTUFBTSxtQkFBbUI7T0FHL0IsZ0JBQWdCLE1BQU0sMkJBQTJCO0FBS3hELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUtwQixhQUFhLElBQUksR0FBdUIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFHL0QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFhLEVBQUUsSUFBWSxFQUFFLE9BQWlCLEVBQUUsUUFBb0I7SUFFN0YsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEdBQUcsWUFBbUI7WUFFekQsSUFBSSxJQUFJLEdBQVEsSUFBSSxRQUFRLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUk5QyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7WUFDOUQsQ0FBQztZQUdELE1BQU0sQ0FBQyxDQUFDLEtBQVUsRUFBRSxHQUFHLE1BQWE7Z0JBR25DLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDMUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUkscUJBQXFCLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQzdELENBQUM7Z0JBR0QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFBO1FBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImxpYi9kZWNvcmF0b3JzL3BpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAjIFBpcGUgRGVjb3JhdG9yXG4vLyBXaGlsZSBub3QgZXZlbiBjbG9zZSB0byBhIGNvbXBsZXRlIHBvbHlmaWxsIG9mIEFuZ3VsYXIgMiBwaXBlcywgZm9yIHB1cmVcbi8vIGZpbHRlciBmdW5jdGlvbnMgeW91IGNhbiBiZWdpbiB3cml0aW5nIHRoZW0gdXNpbmcgcGlwZS1saWtlIHN5bnRheC5cbi8vXG4vLyAjIyBVc2FnZVxuLy8gYGBganNcbi8vIEBQaXBlKCd0b1VwcGVyQ2FzZScpXG4vLyBjbGFzcyBUb1VwcGVyQ2FzZXtcbi8vIFx0c3VwcG9ydHMoaW5wdXQpe1xuLy8gXHRcdHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnO1xuLy8gXHR9XG4vL1xuLy8gXHR0cmFuc2Zvcm0oaW5wdXQpe1xuLy8gXHRcdHJldHVybiBpbnB1dC50b1VwcGVyQ2FzZSgpO1xuLy8gXHR9XG4vLyB9XG4vLyBgYGBcbi8vIEFuZCBpbiB5b3VyIHRlbXBsYXRlczpcbi8vIGBgYGh0bWxcbi8vIHt7IHZtLm5hbWUgfCB0b1VwcGVyQ2FzZSB9fVxuLy8gYGBgXG4vLyAjIyBTZXR1cFxuLy8gVGhpcyBpcyBhIHByb3ZpZGVyLXR5cGUgZGVjb3JhdG9yLCBzbyB3ZSdsbCBuZWVkIHRvIHJlZ2lzdGVyIGl0IHdpdGggTW9kdWxlXG5pbXBvcnQgTW9kdWxlIGZyb20gJy4uL2NsYXNzZXMvbW9kdWxlJztcbi8vIFRoZSBvbmx5IGNvbmZpZ3VyYWJsZSBpbmZvcm1hdGlvbiBpdCBuZWVkcyBpcyBhbiBvcHRpb25hbCBuYW1lLCBzbyB3ZSdsbFxuLy8gZ2VuZXJhdGUgdGhlIGRlY29yYXRvciB3aXRoIG91ciBkZWNvcmF0b3IgZmFjdG9yeS5cbmltcG9ydCBkZWNvcmF0b3JGYWN0b3J5IGZyb20gJy4uL3V0aWwvZGVjb3JhdG9yLWZhY3RvcnknO1xuXG4vLyAjIyBEZWNvcmF0b3IgRGVmaW5pdGlvblxuLy8gUHJvdmlkZXIgdHlwZSBmb3IgZm9yIHRoaXMgZGVjb3JhdG9yIGlzIGBwaXBlYCwgdGhvdWdoIGl0IGlzIG1vc3QgYW5hbG9nb3VzXG4vLyB0byBhbiBBbmd1bGFyIDEgZmlsdGVyLlxuY29uc3QgVFlQRSA9ICdwaXBlJztcblxuLy8gVGhlIGRlY29yYXRvciBpdHNlbGYuIE5vdGUgdGhhdCB3aGlsZSB0aGUgbmFtZSBpcyB0ZWNobmljYWxseSBvcHRpb25hbCxcbi8vIHdpdGggcGlwZXMgeW91IHdpbGwgYWxtb3N0IF9hbHdheXNfIHdhbnRzIHRvIHByb3ZpZGUgYSBuYW1lIHRvIHVzZSBpbiB5b3VyXG4vLyB0ZW1wbGF0ZXMgdGhhdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgY2xhc3MgbmFtZS4gVGhpcyBrZWVwcyB5b3VyIGNvZGUgdWdsaWZ5LXByb29mLlxuZXhwb3J0IGNvbnN0IFBpcGU6IChhbnk/OiBhbnkpID0+IGFueSA9IGRlY29yYXRvckZhY3RvcnkoVFlQRSk7XG5cbi8vICMjIFByb3ZpZGVyIFBhcnNlclxuTW9kdWxlLmFkZFByb3ZpZGVyKFRZUEUsIChwcm92aWRlcjogYW55LCBuYW1lOiBzdHJpbmcsIGluamVjdHM6IHN0cmluZ1tdLCBuZ01vZHVsZTogbmcuSU1vZHVsZSkgPT4ge1xuXHQvLyBUaGlzIHByb3ZpZGVyIHJlY2lwZSB1c2VzIEFuZ3VsYXIgMSBmaWx0ZXJzXG5cdG5nTW9kdWxlLmZpbHRlcihuYW1lLCBbLi4uaW5qZWN0cywgKC4uLmRlcGVuZGVuY2llczogYW55W10pID0+IHtcblx0XHQvLyBGaXJzdCwgY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciBieSBwYXNzaW5nIGluIGluamVjdGVkIGRlcGVuZGVuY2llc1xuXHRcdGxldCBwaXBlOiBhbnkgPSBuZXcgcHJvdmlkZXIoLi4uZGVwZW5kZW5jaWVzKTtcblxuXHRcdC8vIEFsbCBwaXBlcyBtdXN0IGltcGxlbWVudCBhIGB0cmFuc2Zvcm1gIG1ldGhvZC4gVGhlc2UgX19tdXN0X18gYmUgcHVyZVxuXHRcdC8vIGZ1bmN0aW9ucyAoZm9yIHNvbWUgaW5wdXQsIGl0IG11c3QgYWx3YXlzIHJldHVybiB0aGUgc2FtZSBvdXRwdXQpXG5cdFx0aWYoIXBpcGUudHJhbnNmb3JtKXtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRmlsdGVycyBtdXN0IGltcGxlbWVudCBhIHRyYW5zZm9ybSBtZXRob2QnKTtcblx0XHR9XG5cblx0XHQvLyBUaGlzIGlzIHRoZSBBbmd1bGFyIDEgZmlsdGVyIGl0c2VsZlxuXHRcdHJldHVybiAoaW5wdXQ6IGFueSwgLi4ucGFyYW1zOiBhbnlbXSkgPT4ge1xuXHRcdFx0Ly8gUGFzcyB0aGUgaW5wdXQgdG8gdGhlIHBpcGUgdG8gc2VlIGlmIGl0IGNvbmZvcm1zIHRvIHRoZSBwaXBlJ3MgdHlwZVxuXHRcdFx0Ly8gc3BlY1xuXHRcdFx0aWYocGlwZS5zdXBwb3J0cyAmJiAhcGlwZS5zdXBwb3J0cyhpbnB1dCkpe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEZpbHRlciAke25hbWV9IGRvZXMgbm90IHN1cHBvcnQgJHtpbnB1dH1gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUGFzcyBhbGwgaW5wdXRzIGFuZCBwYXJhbWV0ZXJzIHRvIHRoZSBmaWx0ZXIgcmV0dXJuaW5nIHRoZSBvdXRwdXRcblx0XHRcdHJldHVybiBwaXBlLnRyYW5zZm9ybShpbnB1dCwgLi4ucGFyYW1zKTtcblx0XHR9XG5cdH1dKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
