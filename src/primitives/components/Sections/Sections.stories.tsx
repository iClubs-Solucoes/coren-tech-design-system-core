import { Meta, StoryFn } from '@storybook/react';
import { Section } from 'primitives';

import { Sections } from './Sections';

export default {
  title: 'Primitives/Sections',
  component: Sections,
} as Meta<typeof Sections>;

const Template: StoryFn<typeof Sections> = function Template(args) {
  return (
    <div style={{ height: '100vh' }}>
      <Sections {...args}>
        <Section.Container>
          <Section.Title>Seção 1</Section.Title>
          <Section.Bold>Lorem Ipsum</Section.Bold>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Section.Container>

        <Section.Container>
          <Section.Title>Seção 2</Section.Title>
          <Section.Bold>Lorem Ipsum</Section.Bold>

          <p style={{ marginBottom: '1.6rem' }}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor
            sit amet..&quot;, comes from a line in section 1.10.32. The standard
            chunk of Lorem Ipsum used since the 1500s is reproduced below for
            those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus
            Bonorum et Malorum&quot; by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>

          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn&apos;t anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </Section.Container>

        <Section.Container>
          <Section.Title>Seção 3</Section.Title>
          <Section.Bold>Lorem Ipsum</Section.Bold>

          <p style={{ marginBottom: '1.6rem' }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using &apos;Content here,
            content here&apos;, making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum
            as their default model text, and a search for &apos;lorem
            ipsum&apos; will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </p>

          <p style={{ marginBottom: '1.6rem' }}>
            Nulla rutrum eros ut dolor dapibus fringilla. Nunc libero tellus,
            tristique at dictum at, venenatis a tellus. Integer nec ante urna.
            Nam sit amet odio efficitur, vestibulum est non, sodales ligula.
            Etiam sit amet magna aliquet, dignissim sapien sed, tempor felis. In
            euismod neque eu tellus imperdiet dapibus. Cras maximus, purus eu
            euismod feugiat, arcu sem aliquam quam, placerat tempor nisi sem eu
            elit. Proin auctor consequat libero quis efficitur. Nam ultricies
            magna eget ipsum lobortis lacinia. In hac habitasse platea dictumst.
            Morbi aliquet enim aliquam lectus consequat feugiat. Nam ac erat
            interdum, egestas mi id, dapibus tortor. In ultricies volutpat diam
            vitae lacinia. Proin et pellentesque elit.{' '}
          </p>

          <p>
            Aenean tempus, nunc et fringilla vulputate, sapien nisl pretium
            lectus, vitae sollicitudin justo odio ac risus. Curabitur vitae enim
            massa. Nulla in dolor ac libero dapibus tristique vel eu libero.
            Integer quam nisi, rhoncus ac facilisis et, facilisis eu justo.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Duis quis ornare elit. Pellentesque
            efficitur quam sapien, quis faucibus urna congue vitae. Nulla sed
            eros urna. Ut a auctor massa. Nam in turpis tempor, tempor lorem ac,
            malesuada dui. Maecenas tempor enim vitae lorem sagittis consequat.
            Suspendisse at quam aliquet leo dictum porta. Suspendisse et metus
            ut quam rhoncus varius non ac dui. Vivamus ultricies sapien
            facilisis turpis dapibus condimentum. Fusce ac ante orci.
          </p>
        </Section.Container>
      </Sections>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  sectionsPadding: '1.6rem',
  initialDivisor: false,
};
