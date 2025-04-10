import { Card, Header, Hero, TestimonialCard } from "compositions";
import { IconHelpCircle } from "icons";
import { Flex, FlexItem, Section } from "layout";
import {
  Accordion,
  AccordionItem,
  Button,
  ButtonGroup,
  Dialog,
  DialogBody,
  DialogClose,
  DialogModal,
  DialogTitle,
  Form,
  Image,
  Input,
  Text,
  TextContentHeading,
  TextContentTitle,
  TextHeading,
} from "primitives";
import { AuthenticationProvider } from "providers";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AuthenticationProvider>
      <Header />

      <DialogModal
        isDismissable
        isOpen={isModalOpen}
        onOpenChange={(isModalOpen) => {
          setIsModalOpen(isModalOpen);
        }}
      >
        <Dialog type="card">
          <DialogClose
            onPress={() => {
              setIsModalOpen(false);
            }}
          />
          <DialogTitle>Why Cats?</DialogTitle>
          <DialogBody>
            Cats make wonderful companions—they are independent yet
            affectionate, low-maintenance yet playful. They can adapt to various
            living spaces, provide comfort, and bring joy with their quirky
            personalities. Whether you’re looking for a cozy lap cat or an
            energetic playmate, a cat can offer endless love and entertainment
            while being a calming presence in your home. Plus, adopting a cat
            saves a life and gives them a chance at a happy, fulfilling future!
          </DialogBody>
          <ButtonGroup align="center">
            <Button onPress={() => {}} variant="primary">
              Donate to our cause
            </Button>
          </ButtonGroup>
        </Dialog>
      </DialogModal>

      <Hero variant="image" src={"hero.jpg"}>
        <TextContentTitle
          align="center"
          title="CatAdopt"
          subtitle="Find Your Purrfect Companion"
        />
        <ButtonGroup align="center">
          <Button
            onPress={() => {
              setIsModalOpen(true);
            }}
            variant="primary"
          >
            <IconHelpCircle />
            Why Cats?
          </Button>
        </ButtonGroup>
      </Hero>

      <Section>
        <Flex container gap="1200" direction="column" alignSecondary="stretch">
          <TextContentHeading heading="Meet some of our cats" />
          <FlexItem>
            <Flex wrap type="third" gap="1200">
              <Card
                asset={
                  <Image
                    alt="Always use alt text"
                    aspectRatio="1-1"
                    size="small"
                    src="cat-01.jpg"
                  />
                }
                direction="horizontal"
                variant="stroke"
              >
                <TextHeading>Whiskers</TextHeading>
                <Text>A curious little explorer with a heart full of love</Text>
              </Card>
              <Card
                asset={
                  <Image
                    alt="Always use alt text"
                    aspectRatio="1-1"
                    size="small"
                    src="cat-02.jpg"
                  />
                }
                direction="horizontal"
                variant="stroke"
              >
                <TextHeading>Luna</TextHeading>
                <Text>
                  Your night-time cuddle buddy, ready to brighten your days
                </Text>
              </Card>
              <Card
                asset={
                  <Image
                    alt="Always use alt text"
                    aspectRatio="1-1"
                    size="small"
                    src="cat-03.jpg"
                  />
                }
                direction="horizontal"
                variant="stroke"
              >
                <TextHeading>Pudding</TextHeading>
                <Text>Sweet as dessert, and always looking for snuggles</Text>
              </Card>
              <Card
                asset={
                  <Image
                    alt="Always use alt text"
                    aspectRatio="1-1"
                    size="small"
                    src="cat-04.jpg"
                  />
                }
                direction="horizontal"
                variant="stroke"
              >
                <TextHeading>Milo</TextHeading>
                <Text>A playful pouncer with a gentle, loving soul</Text>
              </Card>
              <Card
                asset={
                  <Image
                    alt="Always use alt text"
                    aspectRatio="1-1"
                    size="small"
                    src="cat-05.jpg"
                  />
                }
                direction="horizontal"
                variant="stroke"
              >
                <TextHeading>Daisy</TextHeading>
                <Text>
                  Like a flower in bloom, she’ll fill your life with joy
                </Text>
              </Card>
              <Card
                asset={
                  <Image
                    alt="Always use alt text"
                    aspectRatio="1-1"
                    size="small"
                    src="cat-06.jpg"
                  />
                }
                direction="horizontal"
                variant="stroke"
              >
                <TextHeading>Shadow</TextHeading>
                <Text>
                  Silent, sleek, and always by your side for a cozy nap
                </Text>
              </Card>
            </Flex>
          </FlexItem>
        </Flex>
      </Section>

      <Section>
        <Flex container gap="1200" direction="column" alignSecondary="stretch">
          <TextContentHeading
            align="center"
            heading="Testimonials from Cat Parents"
          />
          <FlexItem>
            <Flex wrap type="third" gap="1200">
              <TestimonialCard
                heading="“Adopting Rosie was the best decision we ever made. She's brought so much joy to our home.”"
                src={"parent-01.jpeg"}
                name="Evelyn K."
                username="Brooklyn"
              />
              <TestimonialCard
                heading="“My cat Midnight is like a shadow in the night, always there to keep me company.”"
                src={"parent-02.jpeg"}
                name="Liam P."
                username="Queens"
              />
              <TestimonialCard
                heading="“Sunny, our playful feline friend, never fails to brighten our day with her antics.”"
                src={"parent-03.jpeg"}
                name="Sophia M."
                username="The Bronx"
              />
            </Flex>
          </FlexItem>
        </Flex>
      </Section>

      <Section>
        <Flex container alignSecondary="center" direction="column" gap="1200">
          <TextContentHeading
            align="center"
            heading="Frequently Asked Questions"
          />
          <FlexItem>
            <Flex container type="third" alignPrimary="center">
              <FlexItem size="major">
                <Accordion>
                  <AccordionItem
                    title="How do I adopt a cat?"
                    children="Our adoption process is simple—just fill out an application, meet the cat, and once approved, you can bring your new furry friend home!"
                  />
                  <AccordionItem
                    title="Are the cats vaccinated and spayed/neutered?"
                    children="Yes, all of our cats are fully vaccinated and spayed/neutered before adoption to ensure they are healthy and ready for their new home."
                  />
                  <AccordionItem
                    title="Can I adopt if I have other pets?"
                    children="Absolutely! We’ll work with you to ensure a smooth introduction between your new cat and your existing pets."
                  />
                  <AccordionItem
                    title="What is the cost of adoption?"
                    children="The adoption fee varies but generally covers the cost of vaccinations, spaying/neutering, and microchipping."
                  />
                  <AccordionItem
                    title="Do you offer post-adoption support?"
                    children="Yes, we provide resources and support to help you and your new cat adjust to your life together. We’re always here to assist!"
                  />
                </Accordion>
              </FlexItem>
            </Flex>
          </FlexItem>
        </Flex>
      </Section>

      <Section padding="1600">
        <Flex
          container
          wrap
          gap="1200"
          direction="column"
          alignPrimary="center"
          alignSecondary="center"
          type="third"
        >
          <TextContentHeading
            align="center"
            heading="Subscribe to keep up with our cats"
          />
          <Form singleLine onSubmit={() => {}}>
            <Input value="Email address" />
            <Button onPress={() => {}} variant="primary">
              Subscribe
            </Button>
          </Form>
        </Flex>
      </Section>
    </AuthenticationProvider>
  );
}

export default App;
