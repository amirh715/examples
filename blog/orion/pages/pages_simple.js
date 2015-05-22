/**
 * Created by rob on 22/05/15.
 */

orion.pages.addTemplate({
    template: 'pagesSimple',
    layout: 'layout',
    name: 'Simple',
    description: 'Simple template'
}, {
    content: orion.attribute('froala', {
        label: 'Content'
    })
});
