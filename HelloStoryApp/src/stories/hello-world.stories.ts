import { Story, Meta } from '@storybook/angular/types-6-0';
import { HelloWorldComponent } from 'src/app/hello-world/hello-world.component';


export default {
  title: 'FormationAngular/Hello',
  component: HelloWorldComponent,
} as Meta;


const Template: Story<HelloWorldComponent> = (args: HelloWorldComponent) => ({
  props: args,
});


export const Story1 = Template.bind({});
Story1.args = {
  name:"Toto"
};

export const Story2 = Template.bind({});
Story2.args = {
  name:"Tutu"
};
